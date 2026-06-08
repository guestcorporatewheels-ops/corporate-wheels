# Vibe Coding Prompts — Internal Chauffeur Booking + Admin (Full Stack)

Use this document to build the **same booking product** on a **new website**, with your **own backend** (no Logistifie, no CDS widget, no third-party booking iframe). Match **behavior and UX** of the reference implementation; do **not** copy brand names, logos, or fixed hex colors — derive styling from the **target site’s theme** (CSS variables / Tailwind tokens).

---

## Table of contents

1. [Architecture overview](#1-architecture-overview)
2. [What NOT to use](#2-what-not-to-use)
3. [Tech stack](#3-tech-stack)
4. [Environment variables](#4-environment-variables)
5. [Google Maps Places Autocomplete (exact behavior)](#5-google-maps-places-autocomplete-exact-behavior)
6. [Booking state model](#6-booking-state-model)
7. [Public booking funnel (UX spec)](#7-public-booking-funnel-ux-spec)
8. [Backend API contract](#8-backend-api-contract)
9. [Backend database models (suggested)](#9-backend-database-models-suggested)
10. [Quote pricing engine (backend logic)](#10-quote-pricing-engine-backend-logic)
11. [Stripe payments (backend + frontend)](#11-stripe-payments-backend--frontend)
12. [Admin panel (frontend + backend)](#12-admin-panel-frontend--backend)
13. [CORS, auth, deployment](#13-cors-auth-deployment)
14. [Vibe coding prompts (copy-paste)](#14-vibe-coding-prompts-copy-paste)

---

## 1. Architecture overview

```
┌─────────────────────────────────────────────────────────────────┐
│  React SPA (new website)                                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐ │
│  │ BookingWidget│→ │ 4-step funnel│→ │ Stripe.js (browser)  │ │
│  │ + Places API │  │ select-car…  │  │                      │ │
│  └──────┬───────┘  └──────┬───────┘  └──────────┬───────────┘ │
│         │                 │                      │             │
│         │    fetch() direct with CORS            │             │
└─────────┼─────────────────┼──────────────────────┼─────────────┘
          │                 │                      │
          ▼                 ▼                      ▼
┌─────────────────────────────────────────────────────────────────┐
│  YOUR FastAPI backend (single origin for business logic)        │
│  /api/v1/quotes/get-quotes                                     │
│  /api/v1/orders                                                 │
│  /api/v1/payments/create-payment-intent                         │
│  /api/v1/vehicle-classes, /extra-pickup-types, /files/upload    │
│  /api/v1/admins/login, /refresh-token                         │
│  PostgreSQL (or MongoDB) + Stripe secret + optional S3 for images│
└─────────────────────────────────────────────────────────────────┘

Google Maps JS API (Places Autocomplete) — called from browser only;
API key is publishable (restrict by HTTP referrer in Google Cloud Console).
```

**Important:** The browser calls **your FastAPI host directly** (e.g. `VITE_API_BASE_URL=https://api.yoursite.com`). No Express proxy required unless you prefer same-origin `/api/*` rewrites on Vercel.

---

## 2. What NOT to use

- **No Logistifie** or any external `<booking-widget>` script.
- **No CDS** third-party quote/book APIs for the main funnel.
- **No nodemailer on the frontend origin** for booking confirmation (optional: backend sends email after order create via webhook or background task).
- Do not hardcode reference brand colors; use the new site’s design tokens.

---

## 3. Tech stack

| Layer | Stack |
|-------|--------|
| Public frontend | React 18, TypeScript, Vite, React Router 6, Tailwind 3, Radix/shadcn UI, Framer Motion, Lucide icons |
| Admin frontend | Same SPA, route prefix `/admin-panel/*` |
| Backend | **FastAPI**, Python 3.11+, Pydantic v2, SQLAlchemy or Motor, Alembic migrations |
| Auth (admin) | JWT access + refresh tokens |
| Payments | Stripe Payment Element (`@stripe/react-stripe-js`) + PaymentIntent on backend |
| Maps | `@googlemaps/js-api-loader` + Places Autocomplete |
| Phone UI | Country dial picker (restcountries.com or static list), default UK +44 |

---

## 4. Environment variables

### Frontend (`.env`)

```bash
VITE_API_BASE_URL=https://api.yoursite.com
VITE_GOOGLE_MAPS_API_KEY=your_google_places_key
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### Backend

```bash
DATABASE_URL=postgresql://...
JWT_SECRET=...
JWT_ACCESS_EXPIRE_MINUTES=30
JWT_REFRESH_EXPIRE_DAYS=7
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
CORS_ORIGINS=https://yoursite.com,http://localhost:5173
# File upload: local path or S3
UPLOAD_DIR=./uploads
# Optional: Google Distance Matrix server-side for quote distance (or haversine + routing API)
GOOGLE_MAPS_SERVER_KEY=...  # optional, server-only
```

---

## 5. Google Maps Places Autocomplete (exact behavior)

Replicate this client module behavior on the new site.

### Load script (once per session)

- Package: `@googlemaps/js-api-loader`
- `setOptions({ key, v: "weekly", libraries: ["places"] })`
- `importLibrary("places")` — cache promise so multiple inputs share one load

### Bind autocomplete to each address input

```typescript
new google.maps.places.Autocomplete(input, {
  fields: ["formatted_address", "name", "place_id", "geometry", "types"],
  componentRestrictions: { country: "gb" },  // UK only
});
```

### On `place_changed`

1. Read `place.geometry.location` lat/lng (handle both number and function forms).
2. Use `formatted_address ?? name` as display text.
3. **Reject** selection if no geometry (user typed without picking a suggestion).
4. Detect airport:
   - `place.types` includes `"airport"`, OR
   - address/name contains `"airport"` (case-insensitive)
5. Callback returns:
   ```typescript
   { formattedAddress, latitude, longitude, isAirport?: boolean }
   ```
6. Return teardown: remove listener + `clearInstanceListeners(autocomplete)`.

### Widget wiring rules

- **From** input: bind once on mount (keep DOM stable — do not unmount on tab switches).
- **Destination** rows: re-bind when row ids change; max **4** destinations; store coords per row id in a `Map`.
- **Search validation:** From and first destination **must** have coords from autocomplete (not free-typed text only).
- **Airport pickup:** If from is airport OR text contains "airport":
  - `pickup_type` sent to quotes API = `"airport"`
  - **Flight number required** before search
- Else: `pickup_type = "standard"`

### Admin order edit

- Reuse same Places binding on from/to fields (`AdminOrderPlaceField` pattern).
- Allow manual lat/lng fallback fields for edge cases.

---

## 6. Booking state model

React Context `BookingProvider` wrapping the app; optional `sessionStorage` hydrate for refresh.

```typescript
interface BookingData {
  bookingType: "oneway" | "hourly";
  fromLocation: string;
  toLocation: string | string[];
  flightNumber: string;
  date: Date;
  time: string;           // display: "14:30" 24h or "2:30 PM" 12h — pick one and stay consistent
  duration: string;       // hourly only, e.g. "4 hours"

  quoteResponse?: {
    distance_miles: number;
    quotes_break_down_price_list: Array<Record<string, number>>;
    vehicle_quotes: VehicleQuote[];
  };
  quotePickupType?: string;
  routePoints?: {
    from: { address: string; latitude: number; longitude: number };
    to: { address: string; latitude: number; longitude: number };
    stops: Array<{ address: string; latitude: number; longitude: number }>;
  };

  selectedCar?: {
    id: string;
    name: string;
    image: string;
    price: number;
    passengers: number;
    luggage: number;
    features: string[];
    description?: string;
    total_price?: number;
    price_breakdown?: { description: string; amount: number }[];
  };

  customerInfo?: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;       // E.164-ish: "+44 7700 900000"
    specialRequests?: string;
  };

  termsAccepted?: boolean;
}
```

Methods: `updateBookingData(partial)`, `resetBooking()`.

---

## 7. Public booking funnel (UX spec)

Routes (footer hidden on booking steps):

| Step | Route | Progress |
|------|-------|----------|
| 0 | Home hero `BookingWidget` | — |
| 1 | `/booking/select-car` | 25% |
| 2 | `/booking/customer-info` | 50% |
| 3 | `/booking/checkout` | 75% “Review & Confirm” |
| 4 | `/booking/payment` | 100% |
| Done | `/booking/success` | complete |

Guard: steps 2–4 redirect to `/booking/select-car` if `selectedCar` or `customerInfo` missing.

### Step 0 — BookingWidget (home)

**One-way mode (default):**

- From (Places), optional flight number, dynamic destinations (1–4), date calendar, time picker dialog.
- **London pickup rule:** minimum **2 hours** from now in `Europe/London` timezone.
  - Disable calendar days before earliest valid London date.
  - Sanitize time when date changes or picker opens.
  - Block search if pickup &lt; 2h ahead.
- **Search button:** `POST /api/v1/quotes/get-quotes` → save response → navigate `/booking/select-car`.

**Hourly mode:**

- From, date, time, duration selector; **no quote API** on search.
- Navigate to select-car with **static fallback vehicle list** (fixed class cards without live prices).

### Step 1 — Select vehicle

**Your Booking Details card** shows: Type, Date, Time, Flight (if any), Duration (hourly).  
**Do NOT show route distance** on this page.

**Vehicle cards:**

- One-way + quotes: map `vehicle_quotes` → image, name, passengers, luggage, “{name} or similar”, **Total £X.XX**.
- **Do NOT expand** price breakdown or distance pricing text on this page.
- Still save `price_breakdown` + `total_price` on `selectedCar` in context for later steps.
- Select/deselect on click; Continue disabled until selected.

**Includes list:** cancellation, wait time, meet & greet, water (configurable copy).

### Step 2 — Customer info

Fields: first name, last name, email, phone with country code picker (default UK), optional special requests.  
Validate required fields, email format, min phone digits.  
Save → `/booking/checkout`.

### Step 3 — Review & Confirm

**Left column:** Trip details (from, to/stops, date, time, flight, duration) — **no distance line**.  
Selected vehicle summary. Guest/customer info.

**Right sticky Pricing sidebar:**

- List `price_breakdown` lines with **display label helper**:
  - If description contains “distance pricing” or distance + “per mi/mile” → show **“Base price”** only.
  - Other lines (pickup surcharge, VAT) show API text as-is.
- **Total** row.
- Proceed to payment button (mobile: button after pricing column).

### Step 4 — Payment

- Load Stripe PaymentIntent: `POST /api/v1/payments/create-payment-intent` (amount in **pence**, currency `gbp`, metadata: customer, vehicle, booking type).
- Stripe Elements Payment Element; terms checkbox required.
- **On success:** `POST /api/v1/orders` with `is_payment_paid: true`, `transcation_id` = Stripe PaymentIntent id (keep this spelling in API).
- **Fallback** (no Stripe or amount &lt; £0.50): “Complete booking” → order with `is_payment_paid: false`, empty transaction id.
- Handle **3DS return**: URL params `payment_intent_client_secret` + `redirect_status=succeeded` → retrieve intent → create order → success.
- Payment page shows **amount + vehicle name only** (no breakdown list).

### Step 5 — Success

Show booking summary; generate display reference client-side; “New booking” resets context → home.

---

## 8. Backend API contract

Base path: `/api/v1`. All JSON unless file upload.

### 8.1 Public — Quotes

**`POST /api/v1/quotes/get-quotes`**

Request:

```json
{
  "from": { "latitude": 51.875, "longitude": -0.373 },
  "to": { "latitude": 51.154, "longitude": -0.182 },
  "pickup_type": "standard"
}
```

`pickup_type`: `"standard"` | `"airport"` (matches active rows in `extra-pickup-types`).

Response:

```json
{
  "distance_miles": 50.54,
  "quotes_break_down_price_list": [],
  "vehicle_quotes": [
    {
      "vehicle_class_id": "uuid",
      "vehicle_class_image": "https://...",
      "class_name": "Business Class",
      "allow_passengers": 3,
      "allow_luggage": 2,
      "base_price": 60,
      "base_price_per_default_miles": 20,
      "extra_price_per_miles": 5,
      "is_active": true,
      "price_breakdown": [
        { "description": "Pickup surcharge (Airport / Parking)", "amount": 20 },
        { "description": "Distance pricing (50.54 mi, first 20 mi base, then 5.0 per mi)", "amount": 1010.8 },
        { "description": "VAT (20%)", "amount": 208.16 }
      ],
      "total_price": 1248.96
    }
  ]
}
```

Only return **active** vehicle classes. Frontend may reverse array order for display — backend can return consistent sort (e.g. by total_price).

---

### 8.2 Public — Orders

**`POST /api/v1/orders`**

Request body (field names are contractual — note `transcation_id` spelling):

```json
{
  "from": { "address": "...", "latitude": 0, "longitude": 0 },
  "to": { "address": "...", "latitude": 0, "longitude": 0 },
  "stops": [],
  "flight_number": "BA123",
  "pickup_date": "2026-06-15",
  "pickup_time": "2026-06-15T14:30:00.000Z",
  "vehicle_class": "uuid-of-class",
  "first_name": "Jane",
  "last_name": "Doe",
  "email": "jane@example.com",
  "phonenumber": "+44 7700 900000",
  "special_request": "",
  "route_distance": 50.54,
  "total_price": 1248.96,
  "pricing_breakdown": {
    "line_1": { "description": "...", "amount": 20 }
  },
  "is_payment_paid": true,
  "transcation_id": "pi_xxx"
}
```

Response: `{ "id": "order-uuid", ... }` (201).

**`GET /api/v1/orders`** — admin Bearer required; returns list.

**`PUT /api/v1/orders/{id}`** — admin Bearer; same body as create + optional `status`.

Order **status** values (normalize on read/write):

- `not started` (alias: pending)
- `started` (alias: confirmed)
- `completed`
- `cancelled` (alias: canceled)

---

### 8.3 Public — Stripe

**`POST /api/v1/payments/create-payment-intent`**

Request:

```json
{
  "amount": 124896,
  "currency": "gbp",
  "receipt_email": "jane@example.com",
  "metadata": {
    "customer_email": "jane@example.com",
    "customer_name": "Jane Doe",
    "vehicle_class_id": "uuid",
    "vehicle_name": "Business Van",
    "booking_type": "oneway"
  }
}
```

Response:

```json
{ "client_secret": "pi_xxx_secret_xxx" }
```

Also accept nested `{ "data": { "client_secret": "..." } }` for flexibility.

Optional: **`POST /api/v1/webhooks/stripe`** for payment confirmation emails / order status updates.

---

### 8.4 Admin auth

**`POST /api/v1/admins/login`**

```json
{ "email": "admin@example.com", "password": "..." }
```

Response (support flat or nested shapes):

```json
{
  "access_token": "jwt...",
  "refresh_token": "jwt...",
  "email": "admin@example.com"
}
```

**`POST /api/v1/admins/refresh-token`**

```json
{ "refresh_token": "..." }
```

Returns new access_token (and optionally new refresh_token).

---

### 8.5 Admin — Vehicle classes

**`GET/POST /api/v1/vehicle-classes`**  
**`PUT/DELETE /api/v1/vehicle-classes/{id}`**

Entity:

| Field | Type |
|-------|------|
| id | uuid |
| class_name | string |
| vehicle_class_image | url string |
| allow_passengers | int |
| allow_luggage | int |
| base_price | decimal |
| base_price_per_default_miles | decimal |
| extra_price_per_miles | decimal |
| is_active | bool |

---

### 8.6 Admin — Extra pickup types (pricing settings)

**`GET/POST /api/v1/extra-pickup-types`**  
**`PUT/DELETE /api/v1/extra-pickup-types/{id}`**

| Field | Type |
|-------|------|
| pickup_type | string e.g. `airport`, `standard` |
| additional_pricing_type | string e.g. `Parking`, `Welcome Greet` |
| base_price | decimal |
| notes | string |
| is_active | bool |

Used by quote engine to add surcharge lines when `pickup_type` matches.

---

### 8.7 Admin — File upload

**`POST /api/v1/files/upload`**

- `multipart/form-data`, field name `file`
- Bearer required
- Response: `{ "url": "https://..." }` (also accept `public_url`, `file_url`, or nested `data.url`)

---

## 9. Backend database models (suggested)

```python
# admins
id, email, password_hash, created_at

# vehicle_classes
id, class_name, vehicle_class_image, allow_passengers, allow_luggage,
base_price, base_price_per_default_miles, extra_price_per_miles, is_active

# extra_pickup_types
id, pickup_type, additional_pricing_type, base_price, notes, is_active

# orders
id, status, from_json, to_json, stops_json, flight_number,
pickup_date, pickup_time, vehicle_class_id (FK),
first_name, last_name, email, phonenumber, special_request,
route_distance, total_price, pricing_breakdown_json,
is_payment_paid, transcation_id, created_at, updated_at
```

Index orders by `pickup_time` desc for admin dashboard.

---

## 10. Quote pricing engine (backend logic)

Implement in `POST /api/v1/quotes/get-quotes`:

1. **Distance:** Compute road distance in miles (Google Distance Matrix API recommended) or haversine fallback × factor.
2. **For each active vehicle class:**
   - Start with base segment: first `base_price_per_default_miles` included in `base_price`, then `extra_price_per_miles` × extra miles.
   - Add line: `"Distance pricing ({miles} mi, first {N} mi base, then {rate} per mi)"` with computed amount.
3. **Pickup surcharges:** For each active `extra_pickup_types` row matching request `pickup_type`, add line `Pickup surcharge ({pickup_type} / {additional_pricing_type})`.
4. **VAT:** Add line `"VAT (20%)"` on subtotal if your business rules require it.
5. Set `total_price` = sum of breakdown amounts.
6. Return per-class `price_breakdown` array and `total_price`.

Store the same breakdown on order create from frontend payload (do not recalculate silently unless you add server-side validation).

---

## 11. Stripe payments (backend + frontend)

**Backend:** `stripe.PaymentIntent.create(amount=..., currency="gbp", metadata=..., receipt_email=...)`

**Frontend:**

- `@stripe/stripe-js` + `@stripe/react-stripe-js`
- Load publishable key from `VITE_STRIPE_PUBLISHABLE_KEY`
- Enable Stripe only if key present and amount ≥ 50 pence
- After `confirmPayment` success → create order with PaymentIntent id

---

## 12. Admin panel (frontend + backend)

Routes under `/admin-panel`:

| Route | Purpose |
|-------|---------|
| `/admin-panel/login` | Email + password |
| `/admin-panel/dashboard` | Stats + recent orders |
| `/admin-panel/booking-data` | Order list, view, edit, inline status |
| `/admin-panel/vehicle-class-management` | CRUD + image upload |
| `/admin-panel/settings` | Extra pickup types CRUD |

### Auth frontend

- Store session in `localStorage`: `{ accessToken, refreshToken, email, accessTokenExpiresAt }`
- Refresh token 15s before expiry; poll every 60s on admin layout
- `AdminGuard` HOC: redirect to login if session invalid

### Dashboard

- `GET /api/v1/orders` with Bearer
- Poll every 25s when tab visible
- Stat cards: Total, Not started, Started, Completed, Cancelled
- Recent 5 orders: date, customer, vehicle, status, total — **hide order UUID in table** (optional in view modal)

### Booking data

- Desktop table + mobile cards
- **Inline status** `<select>` → immediate `PUT /api/v1/orders/{id}`
- **View modal:** compact multi-column grid, `title` tooltip on long text, pricing_breakdown as JSON string, **no inner scroll trap**
- **Edit modal:** full form, Places on from/to, vehicle class dropdown from API, **no Create order button**
- Status colors: not started amber, started blue, completed green, cancelled red

### Vehicle class management

- Table + create/edit dialog
- Image via upload endpoint or URL
- Delete confirmation dialog

### Settings (pickup pricing)

- CRUD for extra pickup types
- Show count of active types

**Admin UI shell:** Dark sidebar + light content; map sidebar/active states to theme tokens (not hardcoded greens).

---

## 13. CORS, auth, deployment

**CORS:** Allow `GET, POST, PUT, DELETE, OPTIONS` from production + preview + `localhost` dev origins. Allow headers: `Authorization`, `Content-Type`.

**Admin JWT:** Bearer on all `/api/v1/vehicle-classes`, `/orders` (GET admin), `/extra-pickup-types`, `/files/upload`.

**Public:** quotes, create order, create payment intent (optionally rate-limit).

**Deploy:**

- Frontend: Vercel/Netlify static SPA
- Backend: Railway, Fly.io, AWS, etc.
- Set `VITE_API_BASE_URL` in frontend build env

---

## 14. Vibe coding prompts (copy-paste)

Use these **in order** on a greenfield repo for the new website.

---

### PROMPT 1 — Backend (FastAPI + DB + all `/api/v1` routes)

```
Build a FastAPI backend for a chauffeur booking platform. No third-party booking engines.

Implement:
- PostgreSQL models: admins, vehicle_classes, extra_pickup_types, orders (JSON columns for route points and pricing_breakdown)
- Alembic migrations, seed script with 3 vehicle classes and sample extra_pickup_types (airport Parking, airport Welcome Greet)
- JWT admin auth: POST /api/v1/admins/login, POST /api/v1/admins/refresh-token
- CRUD: /api/v1/vehicle-classes, /api/v1/extra-pickup-types (Bearer on mutating routes)
- POST /api/v1/files/upload multipart → public URL
- POST /api/v1/quotes/get-quotes: distance in miles + per-class price_breakdown + total_price (see pricing rules: base miles, extra per mile, pickup surcharges by pickup_type, VAT 20%)
- POST /api/v1/orders public create; GET/PUT /api/v1/orders with Bearer for admin
- Order status: not started | started | completed | cancelled
- POST /api/v1/payments/create-payment-intent using Stripe Python SDK (amount in pence)
- CORS for configurable origins
- Pydantic schemas matching exact field names including transcation_id typo on orders

Include OpenAPI docs, Dockerfile, README with env vars, and pytest for quote + order create.
```

---

### PROMPT 2 — Public frontend (booking funnel + Google Places)

```
Build a React 18 + Vite + TypeScript + Tailwind SPA booking funnel for a chauffeur site.
Use the EXISTING site theme tokens only — no copied brand name or fixed palette.

DO NOT integrate Logistifie or any external booking widget.

Implement BookingProvider context (BookingData shape as spec), sessionStorage optional.

Google Maps Places (UK only, country gb):
- @googlemaps/js-api-loader, bindPlacesAutocomplete on from + destination inputs
- Store lat/lng; require autocomplete selection before search
- isAirport detection; flight number required for airport pickup
- Max 4 destination rows

BookingWidget on home:
- One-way: date calendar, London Europe/London 2-hour minimum pickup (disable invalid days/times), time picker dialog (24h scroll columns)
- Search → POST {VITE_API_BASE_URL}/api/v1/quotes/get-quotes with from/to latlng and pickup_type
- Hourly: duration field, static vehicles, skip quote API

Routes: /booking/select-car (25%), /booking/customer-info (50%), /booking/checkout (75%), /booking/payment, /booking/success
- Select car: show total only, NO distance, NO breakdown expansion; save price_breakdown in context
- Checkout: sticky pricing sidebar WITH breakdown; map "distance pricing" lines to label "Base price"
- Customer info: PhoneWithCountryField default +44
- Payment: Stripe Elements if VITE_STRIPE_PUBLISHABLE_KEY; create order via POST /api/v1/orders; handle 3DS return URL params
- Progress bars, Framer Motion, footer hidden on booking routes

Create lib/backendApiUrl.ts, quotesApi.ts, ordersApi.ts, londonPickupWindow.ts, googlePlacesAutocomplete.ts, priceBreakdownDisplay.ts
```

---

### PROMPT 3 — Admin frontend

```
Add admin panel to the same React SPA at /admin-panel/*.

Pages: login, dashboard, booking-data, vehicle-class-management, settings (extra pickup types).

Auth: loginAdmin → POST /api/v1/admins/login, localStorage session, refresh token before expiry, AdminGuard on protected routes.

Dashboard: poll GET /api/v1/orders every 25s, stat cards by status, recent 5 rows without order ID column.

Booking data: table + mobile cards, inline status select → PUT order, view modal (compact grid), edit modal with Places fields, NO create order button.

Vehicle classes: full CRUD + image upload to /api/v1/files/upload.

Settings: CRUD extra_pickup_types.

AdminLayout: responsive sidebar, logout, generic "Admin" title — theme tokens for colors.
All admin fetch uses Bearer from getValidAdminAccessToken().
```

---

### PROMPT 4 — Integration & QA checklist

```
Wire the new site:
1. Set VITE_API_BASE_URL, VITE_GOOGLE_MAPS_API_KEY, VITE_STRIPE_PUBLISHABLE_KEY
2. Enable CORS on FastAPI for this origin
3. Restrict Google Maps API key to site referrers (Places API + Maps JS API)
4. End-to-end test: home search → select car → guest info → review breakdown → Stripe test card → order in admin panel
5. Test airport pickup requires flight number
6. Test pickup < 2 hours London blocked
7. Test admin login, edit order status, upload vehicle image, add pickup surcharge type and verify quote line appears

Document .env.example for frontend and backend. No secrets in git.
```

---

## Reference: API call sequence (native flow)

| User action | API |
|-------------|-----|
| Click Search on home widget | `POST /api/v1/quotes/get-quotes` |
| Complete payment / booking | `POST /api/v1/payments/create-payment-intent` (if Stripe) |
| Confirm booking | `POST /api/v1/orders` |
| Admin login | `POST /api/v1/admins/login` |
| Admin list/edit orders | `GET/PUT /api/v1/orders` |
| Admin manage fleet/pricing | vehicle-classes + extra-pickup-types CRUD |

---

## Reference: London 2-hour pickup (frontend)

- Timezone: `Europe/London`
- `MIN_LEAD_MS = 2 * 60 * 60 * 1000`
- Functions: `getMinimumPickupUtcMs`, `getLondonYmd`, `getUtcMillisForLondonWallClock`, `isPickupAtLeastTwoHoursAheadLondon`, `getFirstValidTime12hOnLondonDay` (or 24h variant), `isCalendarDayDisabledForMinPickup`
- Error copy: "Pickup must be at least 2 hours from now (UK / London time)."

---

*This document describes behavior mirrored from an internal reference implementation. Adapt copy, fleet images, and business rules (VAT rate, lead time) per your new product.*

---

## Corporate Wheels — Implementation status & steps

This section tracks what was built for **Corporate Wheels** using our own FastAPI + MongoDB backend (no third-party booking engine, **no Stripe** — QR payment instead).

### Architecture (implemented)

```
React SPA (Corporate Wheels theme)
  ├── Home BookingWidget → FastAPI quotes
  ├── /booking/* funnel (5 steps)
  ├── /admin-panel/* (JWT auth)
  └── Payment: QR code scan (placeholder until admin uploads live QR)

backend/ (FastAPI + MongoDB)
  ├── /api/v1/quotes/get-quotes
  ├── /api/v1/orders
  ├── /api/v1/payments/qr (+ admin qr-settings)
  ├── /api/v1/admins/login, refresh-token
  ├── /api/v1/vehicle-classes, extra-pickup-types, files/upload
  └── MongoDB collections: admins, vehicle_classes, extra_pickup_types, orders, payment_settings
```

### Booking flow steps (public)

| Step | Route | What happens |
|------|-------|----------------|
| 0 | `/` (hero widget) | One-way/hourly, Places autocomplete, London 2h rule, date/time pickers → quotes API or static hourly list |
| 1 | `/booking/select-car` | Pick vehicle (25%), total only — no breakdown |
| 2 | `/booking/customer-info` | Guest details (50%) |
| 3 | `/booking/checkout` | Review trip + pricing breakdown (75%) |
| 4 | `/booking/payment` | **QR code payment** — scan, confirm paid, create order |
| 5 | `/booking/success` | Confirmation + reset |

### Admin panel steps

| Route | Purpose |
|-------|---------|
| `/admin-panel/login` | Email + password → JWT |
| `/admin-panel/dashboard` | Order stats + recent 5 (poll 25s) |
| `/admin-panel/booking-data` | Orders list, view, inline status |
| `/admin-panel/vehicle-class-management` | Fleet CRUD + image upload |
| `/admin-panel/settings` | Extra pickup types + **payment QR upload** |

Default admin (after `python backend/seed.py`): `admin@corporatewheels.com` / `admin123`

### Payment (QR — not Stripe)

- **Public:** `GET /api/v1/payments/qr?amount=123.45` returns QR image URL
- **Admin:** upload live QR at Settings → Payment QR code
- Customer flow: scan QR → tick “I have completed payment” → Confirm booking → `POST /api/v1/orders` with `is_payment_paid: false`, `transcation_id: qr-{timestamp}`

### How to run locally

**1. MongoDB** — ensure MongoDB is running on `localhost:27017`

**2. Backend**
```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python seed.py
uvicorn app.main:app --reload --port 8000
```

**3. Frontend**
```bash
# project root — set VITE_API_BASE_URL=http://localhost:8000 in .env
npm run dev
```

**4. Test flow**
- Home → search one-way → select car → customer info → checkout → QR payment → success
- Admin → login → dashboard shows order
- Admin → Settings → upload real payment QR when ready

### Frontend files

- `client/components/booking/BookingWidget.tsx` — home widget
- `client/pages/booking/*` — funnel pages
- `client/pages/admin/*` — admin pages
- `client/lib/backendApiUrl.ts`, `quotesApi.ts`, `ordersApi.ts`, `paymentApi.ts`, `londonPickupWindow.ts`

### Backend files

- `backend/app/main.py` — FastAPI app
- `backend/app/routers/*` — API routes
- `backend/app/services/pricing.py` — quote engine
- `backend/seed.py` — seed data

