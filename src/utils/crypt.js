import bcrypt from 'bcrypt'

export const hashPass = async (password) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  return hashedPassword
}

export const checkPassword = async (password, hashedPassword) => {
  const match = await bcrypt.compare(password, hashedPassword)
  return match
}
