import { Router } from 'express';
import userController from '../controllers/user';

const router = Router();

router.post('/user/singup', userController.createUser);
router.post('/user/login', userController.login);

export default router;
