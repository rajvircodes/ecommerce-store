import dotenv from 'dotenv'

dotenv.config()

import { Redis } from '@upstash/redis'
const redis = new Redis({
  url:process.env.UPSTASH_REDIS_REST_URL ,
  token:process.env.UPSTASH_REDIS_REST_TOKEN,
})

await redis.set("foo", "bar");
// await redis.get("foo");