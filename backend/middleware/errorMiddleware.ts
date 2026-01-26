import { Request, Response, NextFunction } from 'express'

const notFound = (req: Request, res: Response, next: NextFunction): void => {
  const error = new Error(`Not found: ${req.originalUrl}`)
  res.status(404)
  next(error)
}

const errorHandler = (err: Error, req: Request, res: Response, _next: NextFunction): void => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    // provide stack property only in development mode
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

export { notFound, errorHandler }
