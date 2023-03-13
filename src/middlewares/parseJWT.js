export const parseJWT = (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    res.status(400)
    res.json({ error: 'No token provided' })
    return // eslint-disable-line
  }

  const [, jwt] = token.split(' ')
  next()
}
