import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

const registerUser = asyncHandler(async (req, res) => {
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

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // check if user email exists in db
  const user = await User.findOne({ email })

  // return user obj if their password matches
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      email: user.email,
      userToken: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

const getUserProfile = asyncHandler(async (req, res) => {
  // req.user was set in authMiddleware.js
  const user = await User.findById(req.user._id)

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
