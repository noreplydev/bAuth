import * as dotenv from 'dotenv'
import express from 'express'

import { connect } from './db/mongo.js'
import auth from './routes/auth.js'

dotenv.config()
const app = express()
const mongoose = connect()

app.use('/login', auth)

app.listen(3000, () => {
  console.log('listening on http://localhost:3000')
})
