import filesProvider from "./files";

const provider = process.env.CONTENT_PROVIDER ?? "files";

if (provider !== "files" && provider !== "sanity") {
  throw new Error(`Unknown CONTENT_PROVIDER "${provider}". Must be "files" or "sanity".`);
}

// Sanity provider is loaded lazily so the @sanity/client import
// doesn't crash when running in files mode without Sanity env vars.
async function getSanityProvider() {
  const mod = await import("./sanity");
  return mod.default;
}

export { provider };
export { getSanityProvider };
export default filesProvider; // sync fallback — API routes override with async when provider=sanity
