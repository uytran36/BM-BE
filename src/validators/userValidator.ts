import { check } from 'express-validator';

export const userValidator = [
  check('username').isString().not().isEmpty(),
  check('password').isString().not().isEmpty(),
  check('name').isString().not().isEmpty(),
  check('dateOfBirth').isString().not().isEmpty(),
  check('email').isString().not().isEmpty(),
  check('gender').isString().not().isEmpty(),
  check('type').isString().not().isEmpty(),
];
