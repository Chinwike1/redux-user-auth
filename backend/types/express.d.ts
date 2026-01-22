import { IUser } from './index.js'

declare global {
  namespace Express {
    interface Request {
      user?: IUser
    }
  }
}

export {}
