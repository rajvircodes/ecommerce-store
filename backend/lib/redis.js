import dotenv from 'dotenv'
dotenv.config()

import { Redis } from '@upstash/redis'
const redis = new Redis({
  url:process.env.UPSTASH_REDIS_REST_URL,
  token:process.env.UPSTASH_REDIS_REST_TOKEN,
})

if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
  console.warn("Redis environment variables are missing! Authentication features will fail.");
}
export default redis