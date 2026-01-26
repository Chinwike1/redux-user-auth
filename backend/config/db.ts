// database connection file to MongoDB
import mongoose from 'mongoose'
import logger from './logger.js'

const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string)
    logger.info(`MongoDB connected: ${conn.connection.host.toString().substring(0, 6)}...mongodb.net`)
  } catch (error) {
    const err = error as Error
    logger.error(`Error: ${err.message}`)
    process.exit(1)
  }
}

export default connectDB
