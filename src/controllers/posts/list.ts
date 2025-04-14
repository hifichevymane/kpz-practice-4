import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Post } from '../../orm/entities/posts/Post';
import { CustomError } from '../../utils/response/custom-error/CustomError';

export const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const postRepository = getRepository(Post);
    const posts = await postRepository.find({ relations: ['user'] });
    res.customSuccess(200, 'Lists of posts:', posts);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't retrieve list of posts.`, null, err);
    return next(customError);
  }
};
