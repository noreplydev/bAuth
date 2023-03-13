import mongoose from 'mongoose'
import { UserModel } from '../models/user.js'

export const connect = async () => {
  const MONGO_URL = process.env.MONGO_URL
  await mongoose.connect(MONGO_URL)

  return mongoose
}

export const createUser = async (user) => {
  const newUser = new UserModel(user)
  newUser.save()
    .then(user => {
      console.log('user created', user)
    })
    .catch(err => {
      console.log('error creating user', err)
    })
}
