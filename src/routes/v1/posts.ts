import { Router } from 'express';

import { create, destroy, edit, list, show } from 'controllers/posts';
import { checkJwt } from 'middleware/checkJwt';
import { checkRole } from 'middleware/checkRole';

import { validatorEdit } from '../../middleware/validation/posts';

const router = Router();

router.get('/', [checkJwt, checkRole(['ADMINISTRATOR'])], list);

router.get('/:id([0-9]+)', [checkJwt, checkRole(['ADMINISTRATOR'], true)], show);

router.post('/', [checkJwt, checkRole(['ADMINISTRATOR']), validatorEdit], create);

router.patch('/:id([0-9]+)', [checkJwt, checkRole(['ADMINISTRATOR'], true), validatorEdit], edit);

router.delete('/:id([0-9]+)', [checkJwt, checkRole(['ADMINISTRATOR'], true)], destroy);

export default router;
