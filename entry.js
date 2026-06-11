import http from "node:http";
import { Readable } from "node:stream";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import fs from "node:fs";
import { execSync } from "node:child_process";

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serverModulePath = path.resolve(__dirname, "./dist/server/server.js");

// Import the built TanStack Start server handler
const serverModule = await import(pathToFileURL(serverModulePath).href);
const handler = serverModule.default;

const port = process.env.PORT || 3000;

http.createServer(async (req, res) => {
  try {
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
}).listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
