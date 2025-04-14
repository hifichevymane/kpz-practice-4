import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Post } from '../../orm/entities/posts/Post';
import { CustomError } from '../../utils/response/custom-error/CustomError';

export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const postRepository = getRepository(Post);
    const post = await postRepository.findOne(id, { relations: ['user'] });

    if (!post) {
      const customError = new CustomError(404, 'General', `Post with id:${id} not found.`, ['Post not found.']);
      return next(customError);
    }

    res.customSuccess(200, 'Post was found', post);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
