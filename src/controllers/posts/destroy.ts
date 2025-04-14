import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Post } from '../../orm/entities/posts/Post';
import { CustomError } from '../../utils/response/custom-error/CustomError';

export const destroy = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const postRepository = getRepository(Post);

    const post = await postRepository.findOne({ where: { id } });
    if (!post) {
      const customError = new CustomError(404, 'General', 'Not Found', [`Post with id:${id} doesn't exists.`]);
      return next(customError);
    }

    await postRepository.delete(id);
    res.customSuccess(200, 'Post successfully deleted.', {
      id: post.id,
      title: post.title,
      description: post.description,
    });
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
