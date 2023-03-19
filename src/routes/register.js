import { Router } from 'express'
import { createUser, userExists } from '../db/mongo.js'
import { hashPass } from '../utils/crypt.js'

const router = Router()

router.post('/', async (req, res) => {
  console.log('hola', req.body)
  const { user, password, username } = req.body

  if (!user || !password || !username) {
    res.status(400)
    res.json({ error: 'Username or password missing' })
    return // eslint-disable-line
  }

  // null user does not exists
  const exists = await userExists(username)

  if (exists) {
    res.status(400)
    res.json({ error: 'Username already exists' })
    return // eslint-disable-line
  }

  const hashedPassword = await hashPass(password)
  console.log('hashedPassword', hashedPassword)
  const userCreation = createUser({
    name: user,
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
