import { Router } from 'express'
import { createUser, userExists } from '../db/mongo.js'
import { hashPass } from '../utils/crypt.js'

const router = Router()

router.post('/', async (req, res) => {
  const { name, password, username } = req.body

  if (!name || !password || !username) {
    res.status(400)
    res.json({ error: 'Missing field to create a user' })
    return // eslint-disable-line
  }

  // null user does not exists
  const existsQuery = await userExists(username)

  if (existsQuery) {
    res.status(400)
    res.json({ error: 'Username already exists' })
    return // eslint-disable-line
  }

  const hashedPassword = await hashPass(password)

  const userCreation = createUser({
    name,
    password: hashedPassword,
    username
  })

  userCreation
    .then(() => {
      res.status(201)
      res.json({ status: 'User created' })
    })
    .catch((err) => {
      console.log(err)
      res.status(500)
      res.json({ error: 'Cannot create user' })
    })
})

export default router
