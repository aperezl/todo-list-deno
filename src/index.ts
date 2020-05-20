import { Application, Context } from 'https://deno.land/x/oak/mod.ts'
import router from './routes.ts'
import { config } from 'https://deno.land/x/dotenv/mod.ts'
import { exists } from 'https://deno.land/std@0.51.0/fs/mod.ts'

const app = new Application()
const existsEnv = await exists('./.env')
let PORT 
if (existsEnv) {
  PORT =  config().PORT
} else {
  PORT = '1337'
}

app.use(router.routes())
console.log(`
  Simple Todo List API
  Listening in http://0.0.0.0:${PORT}/todos
`)
await app.listen({ port: parseInt(PORT) || 1337 })


