import { Router } from 'express'
import { loggedIn } from '../middlewares/loggedIn.js'

const router = Router()

router.all('/', loggedIn)

router.get('/', (req, res) => {
  res.status(200)
  res.contentType('html')
  res.send(`<p>Hi again ${req.user.name}</p>`)
})

export default router
