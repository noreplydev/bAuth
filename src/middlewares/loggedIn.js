import jwt from 'jsonwebtoken'

export const loggedIn = (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    res.status(400)
    res.json({ error: 'No token provided' })
    return // eslint-disable-line
  }

  const [, jwt] = token.split(' ')

  if (!jwt) {
    res.status(401)
    res.json({ error: 'Unauthorized' })
    return // eslint-disable-line
  }

  try {
    const decoded = jwt.verify(jwt, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (e) {
    res.status(401)
    res.json({ error: 'Unauthorized' })
    return // eslint-disable-line
  }
}
