import { Router } from 'express';
import userController from '../controllers/user.ts';

const router = Router();

router.get('/user/login', userController.login);
