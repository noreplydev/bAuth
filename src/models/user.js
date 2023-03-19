import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now() }
})

// model name, schema, collection name
export const UserModel = model('User', userSchema, 'users')
