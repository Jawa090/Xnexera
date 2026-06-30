import http from "node:http";
import { Readable } from "node:stream";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import fs from "node:fs";

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serverModulePath = path.resolve(__dirname, "./dist/server/server.js");

// Cache the imported handler promise so we only import it once
let cachedHandler = null;

async function getHandler() {
  if (!cachedHandler) {
    const serverModule = await import(pathToFileURL(serverModulePath).href);
    cachedHandler = serverModule.default;
  }
  return cachedHandler;
}

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return MIME_TYPES[ext] || "application/octet-stream";
}

const port = process.env.PORT || 3000;

http.createServer(async (req, res) => {
  try {
    // Serve static files from dist/client
    let reqPath = req.url.split("?")[0]; // Remove query params
    const safePath = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, "");
    const localFilePath = path.join(__dirname, "dist/client", safePath);

    if (fs.existsSync(localFilePath) && fs.statSync(localFilePath).isFile()) {
      const mimeType = getMimeType(localFilePath);
      const headers = { "Content-Type": mimeType };

      // Immutable cache for hashed assets (JS, CSS, images in /assets/)
      if (safePath.startsWith("/assets/")) {
        headers["Cache-Control"] = "public, max-age=31536000, immutable";
      } else {
        headers["Cache-Control"] = "public, max-age=3600";
      }

      // CORS for font files (needed when loaded cross-origin)
      const ext = path.extname(localFilePath).toLowerCase();
      if ([".woff", ".woff2", ".ttf"].includes(ext)) {
        headers["Access-Control-Allow-Origin"] = "*";
      }

      res.writeHead(200, headers);
      fs.createReadStream(localFilePath).pipe(res);
      return;
    }

    const handler = await getHandler();

    const protocol = req.headers["x-forwarded-proto"] || "http";
    const host = req.headers.host || "localhost";
    const url = `${protocol}://${host}${req.url}`;

    // Map Node headers to Web Headers
    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (Array.isArray(value)) {
        for (const v of value) {
          headers.append(key, v);
        }
      } else if (value !== undefined) {
        headers.set(key, value);
      }
    }

    // Read request body if applicable
    const hasBody = !["GET", "HEAD"].includes(req.method || "");
    let body = undefined;
    if (hasBody) {
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      body = chunks.length > 0 ? Buffer.concat(chunks) : undefined;
    }

    // Construct standard Web Request
    const webReq = new Request(url, {
      method: req.method,
      headers,
      body,
      // Duplex is required in Node when body is defined
      ...(body ? { duplex: "half" } : {}),
    });

    // Invoke TanStack Start's fetch handler
    const webRes = await handler.fetch(webReq);

    // Write Web Response back to Node ServerResponse
    res.statusCode = webRes.status;
    webRes.headers.forEach((value, key) => {
      // Avoid duplicate headers if Node handles them
      res.setHeader(key, value);
    });

    if (webRes.body) {
      Readable.from(webRes.body).pipe(res);
    } else {
      res.end();
    }
  } catch (error) {
    console.error("Error in server adapter:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal Server Error");
  }
}).listen(port, "0.0.0.0", () => {
  console.log(`Server is listening on port ${port}`);
});
