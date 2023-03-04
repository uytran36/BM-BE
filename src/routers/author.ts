import { Router } from 'express';
import authorController from '../controllers/author';

const router = Router();

router.post('/author/add', authorController.addAuthor);
