import { Request, Response } from 'express';
import authorServices from '../services/author';
import { ApiResponse } from '../types';

async function addAuthor(req: Request, res: Response<ApiResponse>) {
  try {
    await authorServices.addAuthor(req.body);
    res.json({
      message: 'Add author success!',
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

export default {
  addAuthor,
};
