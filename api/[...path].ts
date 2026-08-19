import { createServer } from "../server/index.js";

// Vercel Serverless Function entry point. This file is mapped to every
// request under /api/* and simply hands it to the same Express app used
// for local dev (vite.config.ts) and Netlify (netlify/functions/api.ts),
// so all three environments share one implementation of the API routes.
export default createServer();
