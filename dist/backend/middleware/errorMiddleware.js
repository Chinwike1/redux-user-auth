const notFound = (req, res, next) => {
    const error = new Error(`Not found: ${req.originalUrl}`);
    res.status(404);
    next(error);
};
const errorHandler = (err, req, res, _next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        // provide stack property only in development mode
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};
export { notFound, errorHandler };
//# sourceMappingURL=errorMiddleware.js.map