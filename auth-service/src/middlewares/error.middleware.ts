import { Request, Response, NextFunction } from 'express';
import { AppError, NotFoundError } from '../utils/custom-errors';
import { logger } from '../utils/logger';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const correlationId = (req.headers['x-correlation-id'] as string) || 'no-correlation-id';
  const timestamp = new Date().toISOString();

  if (err instanceof AppError) {
    const errorData = err.serializeError();

    logger.warn(`[${errorData.errorCode}] ${errorData.message}`, {
      correlationId,
      path: req.originalUrl,
      method: req.method,
      details: errorData.details,
    });

    return res.status(errorData.statusCode).json({
      success: false,
      error: errorData,
      correlationId,
      timestamp,
    });
  }

  logger.error(`[UNHANDLED_EXCEPTION] ${err.message}`, {
    correlationId,
    path: req.originalUrl,
    method: req.method,
    stack: err.stack,
  });

  return res.status(500).json({
    success: false,
    error: {
      statusCode: 500,
      errorCode: 'INTERNAL_SERVER_ERROR',
      message: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message,
    },
    correlationId,
    timestamp,
  });
};

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundError(`Route not found: ${req.method} ${req.originalUrl}`));
};
