import jwt from 'jsonwebtoken'

// generate token that expires in 12 hours
const generateToken = (id: string): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, { expiresIn: '12h' })
}

export default generateToken
