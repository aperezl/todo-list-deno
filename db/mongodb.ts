import { config } from 'https://deno.land/x/dotenv/mod.ts'
import { init, MongoClient } from 'https://deno.land/x/mongo/mod.ts'

const { MONGOURI } =  config()
const client = new MongoClient()
client.connectWithUri(MONGOURI)
const db = client.database('todos')

export default db