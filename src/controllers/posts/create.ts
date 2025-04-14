import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Post } from '../../orm/entities/posts/Post';
import { User } from '../../orm/entities/users/User';
import { CustomError } from '../../utils/response/custom-error/CustomError';

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, description } = req.body;
    const { id: userId } = req.jwtPayload;
    const postRepository = getRepository(Post);

    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: { id: userId } });

    const post = new Post();
    post.title = title;
    post.description = description;
    post.user = user;
    const createdPost = await postRepository.save(post);
    res.customSuccess(200, 'Post was successfully created.', createdPost);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
