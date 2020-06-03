import {
  serve,
  Server,
  ServerRequest,
} from "https://deno.land/std@0.54.0/http/server.ts";

const s: Server = serve({ port: 8000 });
console.log("http://localhost:8000/");

for await (const req of s) {
  logRequest(req);

  const { headers } = req;
  const body = await getBody(req);

  const responseHeaders = new Headers({ "Content-Type": "application/json" });
  const responseBody = { headers: headers.entries(), body };
  const response = {
    status: 404,
    headers: responseHeaders,
    body: JSON.stringify(responseBody),
  };

  logResponse(response);

  req.respond(response);
}

async function getBody(req: ServerRequest): Promise<{ [x: string]: any }> {
  const buffer = new Uint8Array(1024).fill(" ".charCodeAt(0));
  await req.body.read(buffer);

  const bodyString = new TextDecoder("utf-8").decode(buffer).trim();

  return JSON.parse(bodyString);
}

function logRequest(req: ServerRequest): void {
  const { url, method } = req;

  console.log(`Request: [${method}] ${url}`);
}

function logResponse(res: any): void {
  const { status, body } = res;

  console.log(`Response: [${status}] ${body}`);
}
