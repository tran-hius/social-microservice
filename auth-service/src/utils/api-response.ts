import { Response } from 'express';

export interface ApiResponsePayload<T = any> {
  success: boolean;
  statusCode: number;
  message: string;
  data?: T;
  correlationId?: string;
  timestamp: string;
}

export class ApiResponse {
  static success<T>(
    res: Response,
    data?: T,
    message: string = 'Success',
    statusCode: number = 200
  ): Response {
    const correlationId = (res.req?.headers['x-correlation-id'] as string) || undefined;

    const payload: ApiResponsePayload<T> = {
      success: true,
      statusCode,
      message,
      data,
      correlationId,
      timestamp: new Date().toISOString(),
    };

    return res.status(statusCode).json(payload);
  }

  static created<T>(
    res: Response,
    data?: T,
    message: string = 'Resource created successfully'
  ): Response {
    return this.success(res, data, message, 201);
  }

  static noContent(res: Response): Response {
    return res.status(204).send();
  }
}
