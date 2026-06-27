import { createServer } from "node:http";
import { createServerAdapter } from "@whatwg-node/server";
import { server } from "./dist/server/server.js";

const adapter = createServerAdapter(server.fetch.bind(server));

const PORT = process.env.PORT || 10000;

createServer(adapter).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});