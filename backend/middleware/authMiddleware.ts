import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import { JwtPayload } from '../types/index.js'

const protect = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  let token: string | undefined
  const authHeader = req.headers.authorization

  if (authHeader && authHeader.startsWith('Bearer')) {
    try {
      // extract token from authHeader string
      token = authHeader.split(' ')[1]

      // verified token returns user id
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload

      // find user's obj in db and assign to req.user
      const user = await User.findById(decoded.id).select('-password')
      if (user) {
        req.user = user.toObject()
      }

      next()
    } catch (error) {
      res.status(401)
      throw new Error('Not authorized, invalid token')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token found')
  }
})

export { protect }
