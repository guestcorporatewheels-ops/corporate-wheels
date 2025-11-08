import React from "react";
import { Link } from "react-router-dom";

export default function ViewAllRoutes() {
  const routes = [
    { from: "London", to: "Heathrow" },
    { from: "Manchester", to: "Airport" },
    { from: "Birmingham", to: "City Centre" },
  ];

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold mb-4">All Routes</h1>
      <p className="text-muted-foreground mb-6">
        Popular routes and quick info.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {routes.map((r, i) => (
          <li
            key={i}
            className="p-4 rounded-lg border border-white/6 bg-surface/40"
          >
            <div className="font-medium">
              {r.from} → {r.to}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Estimated time and typical fare info.
            </div>
            <div className="mt-3">
              <Link to="/booking" className="text-corporate-gold underline">
                Book this route
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
