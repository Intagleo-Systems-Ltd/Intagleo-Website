// Custom Next.js production server for Node.js hosting under Phusion Passenger
// (Hostinger hPanel "Setup Node.js App" → Application startup file = server.js).
// Requires `next build` to have run first (serves the built .next output).
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res, parse(req.url, true));
  }).listen(process.env.PORT || 3000, () => {
    console.log("Next.js running under Passenger");
  });
});
