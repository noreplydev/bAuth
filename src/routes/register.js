import { Router } from 'express'
import { createUser, userExists } from '../db/mongo.js'
import { hashPass } from '../utils/crypt.js'

const router = Router()

router.post('/', (req, res) => {
  console.log('hola', req.body)
  const { user, password, username } = req.body

  if (!user || !password || !username) {
    res.status(400)
    res.json({ error: 'Username or password missing' })
    return // eslint-disable-line
  }

  userExists(username)

  if (false) {
    res.status(400)
    res.json({ error: 'Username already exists' })
    return // eslint-disable-line
  }

  const hashedPassword = hashPass(password)
  const userCreation = createUser({
    name: user,
    password: hashedPassword,
    username: user
  })

  userCreation
    .then((user) => {
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
