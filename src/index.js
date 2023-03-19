import * as dotenv from 'dotenv'
import express from 'express'

import { connect } from './db/mongo.js'
import auth from './routes/auth.js'
import root from './routes/root.js'
import register from './routes/register.js'

dotenv.config()
const app = express()
const mongoose = connect()

// middlewares
app.use(express.json())

// routes
app.use('/', root)
app.use('/login', auth)
app.use('/register', register)

app.listen(3000, () => {
  console.log('listening on http://localhost:3000')
})
