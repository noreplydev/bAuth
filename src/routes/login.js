import { Router } from 'express'
import { userExists } from '../db/mongo.js'
import { checkPassword } from '../utils/crypt.js'
import { generateToken } from '../utils/jwt.js'

const router = Router()

router.post('/', async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    res.status(400)
    res.json({ 'Bad Request': 'Username or password missing' })
    return // eslint-disable-line
  }

  const user = await userExists(username)

  if (!user) {
    res.status(400)
    res.json({ 'Bad Request': 'Provided user does not exists' })
    return // eslint-disable-line
  }

  // password => input password from the client
  // user.password => hashed password from the database
  const match = await checkPassword(password, user.password)

  if (!match) {
    res.status(400)
    res.json({ 'Bad Request': 'Incorrect password' })
    return // eslint-disable-line
  }

  const token = generateToken({ username: user.username, name: user.name })

  res.status(201)
  res.json({ token })
})

export default router
