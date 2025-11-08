import React from "react";
import { Link } from "react-router-dom";

export default function ViewAllServices() {
  const services = [
    "Airport Transfers",
    "Hourly Hire",
    "City-to-City",
    "Business Travel",
    "Event Transport",
    "Chauffeur Hailing",
  ];

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold mb-4">All Services</h1>
      <p className="text-muted-foreground mb-6">
        Quick overview of services we offer.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((s) => (
          <li
            key={s}
            className="p-4 rounded-lg border border-white/6 bg-surface/40"
          >
            <div className="font-medium">{s}</div>
            <div className="text-sm text-muted-foreground mt-1">
              Short description for {s}.
            </div>
            <div className="mt-3">
              <Link to="/booking" className="text-corporate-gold underline">
                Book {s}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
