import React from "react";
import { Link } from "react-router-dom";

export default function ViewAllCities() {
  const cities = [
    "London",
    "Manchester",
    "Birmingham",
    "Glasgow",
    "Leeds",
    "Liverpool",
  ];

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold mb-4">All Cities</h1>
      <p className="text-muted-foreground mb-6">Cities we operate in.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cities.map((c) => (
          <div
            key={c}
            className="p-4 rounded-lg border border-white/6 bg-surface/40"
          >
            <div className="font-medium">{c}</div>
            <div className="text-sm text-muted-foreground mt-1">
              Routes and services in {c}.
            </div>
            <div className="mt-3">
              <Link
                to="/city-to-city"
                className="text-corporate-gold underline"
              >
                View routes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
