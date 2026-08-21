import { Request, Response, NextFunction } from 'express';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate, ValidationError as ClassValidatorError } from 'class-validator';
import { ValidationError } from '../utils/custom-errors.js';

export const validateDto = <T extends object>(
  dtoClass: ClassConstructor<T>,
  target: 'body' | 'query' | 'params' = 'body'
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoInstance = plainToInstance(dtoClass, req[target]);
    const errors: ClassValidatorError[] = await validate(dtoInstance, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });

    if (errors.length > 0) {
      const formattedErrors = errors.map((err) => {
        const constraints = err.constraints ? Object.values(err.constraints) : [];
        return {
          field: err.property,
          message: constraints.join(', ') || `Validation failed on ${err.property}`,
        };
      });

      return next(new ValidationError(formattedErrors));
    }

    req[target] = dtoInstance;
    next();
  };
};
