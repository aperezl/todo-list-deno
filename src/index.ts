import { Application } from "./deps.ts";
import { config, exists } from "./deps.ts";
import router from "./routes.ts";

const app = new Application();
const existsEnv = await exists("./.env");
let PORT;
if (existsEnv) {
  PORT = config().PORT;
} else {
  PORT = "1337";
}

app.use(router.routes());
console.log(`
  Simple Todo List API
  Listening in http://0.0.0.0:${PORT}/todos
`);
await app.listen({ port: parseInt(PORT) || 1337 });
