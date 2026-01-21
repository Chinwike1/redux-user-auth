// database connection file to MongoDB
import { mongoose } from 'mongoose'
import logger from './logger.js'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    logger.info(`MongoDB connected: ${conn.connection.host.toString().substring(0, 6)}...mongodb.net`)
  } catch (error) {
    logger.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
