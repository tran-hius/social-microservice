export interface ErrorDetail {
  field?: string;
  message: string;
}

export abstract class AppError extends Error {
  abstract readonly statusCode: number;
  abstract readonly errorCode: string;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }

  abstract serializeError(): {
    statusCode: number;
    errorCode: string;
    message: string;
    details?: ErrorDetail[];
  };
}

export class BadRequestError extends AppError {
  readonly statusCode = 400;
  readonly errorCode = 'BAD_REQUEST';

  constructor(message: string = 'Bad Request') {
    super(message);
  }

  serializeError() {
    return {
      statusCode: this.statusCode,
      errorCode: this.errorCode,
      message: this.message,
    };
  }
}

export class ValidationError extends AppError {
  readonly statusCode = 422;
  readonly errorCode = 'VALIDATION_FAILED';

  constructor(public details: ErrorDetail[], message: string = 'Validation failed') {
    super(message);
  }

  serializeError() {
    return {
      statusCode: this.statusCode,
      errorCode: this.errorCode,
      message: this.message,
      details: this.details,
    };
  }
}

export class UnauthorizedError extends AppError {
  readonly statusCode = 401;
  readonly errorCode = 'UNAUTHORIZED';

  constructor(message: string = 'Authentication required or invalid credentials') {
    super(message);
  }

  serializeError() {
    return {
      statusCode: this.statusCode,
      errorCode: this.errorCode,
      message: this.message,
    };
  }
}

export class ForbiddenError extends AppError {
  readonly statusCode = 403;
  readonly errorCode = 'FORBIDDEN';

  constructor(message: string = 'Access denied') {
    super(message);
  }

  serializeError() {
    return {
      statusCode: this.statusCode,
      errorCode: this.errorCode,
      message: this.message,
    };
  }
}

export class NotFoundError extends AppError {
  readonly statusCode = 404;
  readonly errorCode = 'NOT_FOUND';

  constructor(message: string = 'Resource not found') {
    super(message);
  }

  serializeError() {
    return {
      statusCode: this.statusCode,
      errorCode: this.errorCode,
      message: this.message,
    };
  }
}

export class ConflictError extends AppError {
  readonly statusCode = 409;
  readonly errorCode = 'RESOURCE_CONFLICT';

  constructor(message: string = 'Resource already exists') {
    super(message);
  }

  serializeError() {
    return {
      statusCode: this.statusCode,
      errorCode: this.errorCode,
      message: this.message,
    };
  }
}

export class InternalServerError extends AppError {
  readonly statusCode = 500;
  readonly errorCode = 'INTERNAL_SERVER_ERROR';

  constructor(message: string = 'Internal server error') {
    super(message);
  }

  serializeError() {
    return {
      statusCode: this.statusCode,
      errorCode: this.errorCode,
      message: this.message,
    };
  }
}
