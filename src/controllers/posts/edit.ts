import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Post } from '../../orm/entities/posts/Post';
import { CustomError } from '../../utils/response/custom-error/CustomError';

export const edit = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const postRepository = getRepository(Post);

    const post = await postRepository.findOne({ where: { id } });
    if (!post) {
      const customError = new CustomError(404, 'General', `Post with id:${id} not found.`, ['Post not found.']);
      return next(customError);
    }

    post.title = title;
    post.description = description;
    await postRepository.save(post);
    res.customSuccess(200, 'User successfully saved.', post);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
