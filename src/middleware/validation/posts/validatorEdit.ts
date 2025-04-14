import { NextFunction, Request, Response } from 'express';

import { CustomError } from 'utils/response/custom-error/CustomError';
import { ErrorValidation } from 'utils/response/custom-error/types';

export const validatorEdit = (req: Request, res: Response, next: NextFunction) => {
  const { title, description } = req.body;
  const errorsValidation: ErrorValidation[] = [];
  if (!title || title.length > 64) {
    errorsValidation.push({ title: `Title should not be empty or exceed 64 characters` });
  }
  if (!description || description.length > 64) {
    errorsValidation.push({ description: `Description should not be empty or exceed 64 characters` });
  }

  if (errorsValidation.length !== 0) {
    const customError = new CustomError(400, 'Validation', 'Edit post validation error', null, null, errorsValidation);
    return next(customError);
  }
  return next();
};
