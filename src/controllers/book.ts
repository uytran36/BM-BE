import { Request, Response } from 'express';
import bookService from '../services/book';
import { ApiResponse } from '../types';

async function addBook(req: Request, res: Response<ApiResponse>) {
  try {
    await bookService.addBook(req.body);
    res.json({
      message: 'Add book success!',
      data: [],
      success: true,
    });
  } catch (err: any) {
    if (err instanceof Error) {
      res.json({
        message: err.toString(),
        data: [],
        success: false,
      });
    }
  }
}

async function getBooks(req: Request, res: Response<ApiResponse>) {
  try {
    const page =
      typeof req.query.page === 'string' ? parseInt(req.query.page, 10) : 1;
    const pageSize =
      typeof req.query.pageSize === 'string'
        ? parseInt(req.query.pageSize, 10)
        : 10;

    const books = await bookService.getBooks(page, pageSize);

    res.json({
      message: 'Get books success!',
      data: books,
      success: true,
    });
  } catch (err: any) {
    if (err instanceof Error) {
      res.json({
        message: err.toString(),
        data: [],
        success: false,
      });
    }
  }
}

export default {
  addBook,
  getBooks,
};
