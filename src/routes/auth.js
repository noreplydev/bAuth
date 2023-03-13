import { Router } from 'express'
import { parseJWT } from '../middlewares/parseJWT.js'
const router = Router()

router.use(parseJWT)

router.post('/', (req, res) => {
  // do the login stuff, return the token an so on
})

export default router
