import mongoose from 'mongoose'
import { UserModel } from '../models/user.js'

export const connect = async () => {
  const MONGO_URL = process.env.MONGO_URL
  await mongoose.connect(MONGO_URL)

  return mongoose
}

export const createUser = async (user) => {
  const newUser = new UserModel(user)
  return newUser.save()
}

export const userExists = async (username) => {
  const query = await UserModel.findOne({ username }).exec()
  console.log('query', query)
  return query
}
