import * as dotenv from 'dotenv'
import express from 'express'

import { connectToMongo } from './db/mongo.js'
import login from './routes/login.js'
import root from './routes/root.js'
import register from './routes/register.js'

dotenv.config()
const app = express()
connectToMongo() // connect to the database

// middlewares
app.use(express.json())

// routes
app.use('/', root)
app.use('/login', login)
app.use('/register', register)

app.listen(process.env.PORT, () => {
  console.log('listening on http://localhost:3000')
})
