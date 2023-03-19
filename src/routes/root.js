import { Router } from 'express'
import { loggedIn } from '../middlewares/loggedIn.js'

const router = Router()

router.all('/', loggedIn)

router.get('/', (req, res) => {
  res.status(200)
  res.send('This is our dashboard, you are logged in')
})

export default router
