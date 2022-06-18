import dotenv from 'dotenv'

dotenv.config({ path: `src/environment/${process.env.NODE_ENV}.env` })