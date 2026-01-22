import { Request, Response, NextFunction } from 'express';
declare const notFound: (req: Request, res: Response, next: NextFunction) => void;
declare const errorHandler: (err: Error, req: Request, res: Response, _next: NextFunction) => void;
export { notFound, errorHandler };
//# sourceMappingURL=errorMiddleware.d.ts.map