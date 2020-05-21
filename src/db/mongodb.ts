import { config } from 'https://deno.land/x/dotenv/mod.ts'
import { MongoClient } from '../deps.ts'
import { exists } from '../deps.ts'

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