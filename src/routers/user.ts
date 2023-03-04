import { Router } from 'express';
import userController from '../controllers/user';

const router = Router();

router.post('/user/singup', userController.createUser);
router.post('/user/login', userController.login);
router.post('/user/refresh-token', userController.getAccessToken);
router.get('/user/get-info-user', userController.getUserData);

export default router;
