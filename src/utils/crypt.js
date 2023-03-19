import bcrypt from 'bcrypt'

export const hashPass = async (password) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  console.log(hashedPassword)
  return hashedPassword
}
