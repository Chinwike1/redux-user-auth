import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config()

const app = express()

// Body parser
app.use(express.json)

// API routes
// app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port http://localhost:${PORT}`
      .yellow.bold
  )
)
