import { config } from 'https://deno.land/x/dotenv/mod.ts'
import { MongoClient } from 'https://deno.land/x/mongo/mod.ts'
import { exists } from 'https://deno.land/std@0.51.0/fs/mod.ts'


const existsEnv = await exists('./.env')

let MONGOURI 
if (existsEnv) {
  MONGOURI =  config().MONGOURI
} else {
  MONGOURI = 'mongodb://localhost:27017'
}
const client = new MongoClient()
client.connectWithUri(MONGOURI)
const db = client.database('todos')

export default db