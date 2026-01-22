import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'
import logger from '../config/logger.js'
import { RegisterBody, LoginBody } from '../types/index.js'

const registerUser = asyncHandler(async (req: Request<{}, {}, RegisterBody>, res: Response): Promise<void> => {
  const { firstName, email, password } = req.body

  // check if email exists in db
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(404)
    throw new Error('User already exists')
  }

  // create new user document in db
  const user = await User.create({ firstName, email, password })

  if (user) {
    logger.info(`${email} registered at ${new Date().toISOString()}`)
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

const loginUser = asyncHandler(async (req: Request<{}, {}, LoginBody>, res: Response): Promise<void> => {
  const { email, password } = req.body

  // check if user email exists in db
  const user = await User.findOne({ email })

  // return user obj if their password matches
  if (user && (await user.matchPassword(password))) {
    logger.info(`${email} signed in at ${new Date().toISOString()}`)
    res.json({
      _id: user._id,
      firstName: user.firstName,
      email: user.email,
      userToken: generateToken(user._id.toString()),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

const getUserProfile = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  // req.user was set in authMiddleware.js
  const user = await User.findById(req.user!._id)

  if (user) {
    res.json({
      id: user._id,
      firstName: user.firstName,
      email: user.email,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export { registerUser, loginUser, getUserProfile }
