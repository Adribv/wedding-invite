import { createServer } from "node:http";
import { createServerAdapter } from "@whatwg-node/server";
import handler from "./dist/server/server.js";

const adapter = createServerAdapter(handler.fetch.bind(handler));

const PORT = process.env.PORT || 10000;

createServer(adapter).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});