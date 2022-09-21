import { Request, Response } from 'express';
import userService from '../services/user';

async function createUser(req: Request, res: Response) {
  try {
    await userService.createUser(req.body);
    res.json({
      message: 'Create user success!',
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
  createUser,
};
