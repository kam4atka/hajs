import {NextFunction, Request, Response} from 'express';
import {ValidationError, validate} from 'class-validator';
import {ClassConstructor, plainToInstance} from 'class-transformer';

import {MiddlewareInterface} from '../middleware.interface.js';
import {ValidationError as FrameworkValidationError} from '../../error/index.js';

/**
 * Validate input data based on data transfer object
 */
export class ValidateDtoMiddleware implements MiddlewareInterface {
  constructor(
    /**
     * @readonly
     *
     * Data transfer object
     */
    private dto: ClassConstructor<object>
  ) {}

  /**
   * Validate incomming plain object by DTO
   *
   * @param req - Request. Must contain plain object.
   * @param res - Response
   * @param next - NextFunction
   */
  public async execute(req: Request, _res: Response, next: NextFunction): Promise<void> {
    const {body} = req;

    const dtoInstance = plainToInstance(this.dto, body);

    const validatedErrors = await validate(dtoInstance, {
      whitelist: true,
      forbidNonWhitelisted: true,
      validationError: {
        target: false
      }
    });

    const errors = validatedErrors.flatMap((error) =>
      (!error.children || error.children?.length === 0)
        ? this.extractError(error)
        : error.children?.flatMap((childrenError) => this.extractError(childrenError))
    );

    if (errors.length > 0) {
      throw new FrameworkValidationError(
        `Validation error: '${req.originalUrl}'`,
        errors
      );
    }

    next();
  }

  /**
  * Parse Validate Error
  *
  * @params error - ValidateError
  */
  private extractError(error: ValidationError) {
    const {property, value, constraints} = error;
    return {
      property, value,
      messages: constraints
        ? Object.values(constraints)
        : []
    };
  }
}
