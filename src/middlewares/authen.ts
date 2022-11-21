import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { ENV } from '../configs';

function authen(req: Request, res: Response, next: NextFunction) {
  try {
    const accessToken = req.headers.authorization?.split(' ')[1];

    if (!accessToken) {
      return res.json({
        message: 'Access token is required!',
        data: [],
        success: false,
      });
    }

    const dataToken: any = jwt.verify(accessToken, ENV.ACCESS_TOKEN_SECRET);
    if (!dataToken) {
      return res.json({
        message: 'Access token is invalid!',
        data: [],
        success: false,
      });
    }
    res.locals.username = dataToken.username;
  } catch (err: any) {
    if (err instanceof Error) {
      return res.json({
        message: err.toString(),
        data: [],
        success: false,
      });
    }
  }
  return next();
}

export { authen };
