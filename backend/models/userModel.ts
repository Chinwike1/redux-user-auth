import bcrypt from 'bcryptjs'
import mongoose, { Schema, HydratedDocument } from 'mongoose'
import { IUser, IUserMethods, UserModel } from '../types/index.js'

const userSchema = new Schema<IUser, UserModel, IUserMethods>(
  {
    firstName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

// hash user's password with salt before saving document to db
userSchema.pre('save', async function (this: HydratedDocument<IUser>) {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

// extend matchPassword function unto userSchema
userSchema.methods.matchPassword = async function (
  this: HydratedDocument<IUser>,
  enteredPassword: string
): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model<IUser, UserModel>('User', userSchema)

export default User
