import path from 'path'
import fs from 'fs'
import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import connectDB from './config/db.js'
import logger from './config/logger.js'
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Deployment configuration
//configure env file in dev mode
dotenv.config()

// configure env file in production
if (process.env.NODE_ENV === undefined) {
  dotenv.config({ path: '../.env' })
}

// Connect to database
connectDB()

const app = express()

// Body parser
app.use(express.json())

// CORS
app.use(
  cors({
    origin: '*',
  }),
)

// API routes
app.use('/api/user', userRoutes)

// Serve static files if frontend/build exists
const distPath = path.join(__dirname, '..', 'frontend', 'build')
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath))

  app.get('*', (_req, res) =>
    res.sendFile(path.resolve(distPath, 'index.html')),
  )
}

// Middleware
app.use(notFound)
app.use(errorHandler)

const PORT = parseInt(process.env.PORT || '5000', 10)
app.listen(PORT, () => {
  logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})
