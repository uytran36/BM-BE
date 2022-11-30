import { Router } from 'express';
import bookController from '../controllers/book';

const router = Router();

router.post('/book/add', bookController.addBook);
router.get('/book/get-books', bookController.getBooks);

export default router;
