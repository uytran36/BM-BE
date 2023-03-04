import { Request, Response } from 'express';
import userService from '../services/user';
import { ApiResponse } from '../types';

async function createUser(req: Request, res: Response<ApiResponse>) {
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

async function login(req: Request, res: Response<ApiResponse>) {
  try {
    const { isLoginSuccess, data } = await userService.login(req.body);
    if (isLoginSuccess) {
      res.json({
        message: 'Login successfully!',
        data: [data],
        success: true,
      });
    } else {
      res.json({
        message: 'Wrong username or password',
        data: [],
        success: false,
      });
    }
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

async function getAccessToken(req: Request, res: Response<ApiResponse>) {
  try {
    const { isGetTokenSuccess, data } = await userService.getAccessToken(
      req.body.refreshToken,
      req.body.username,
    );
    if (isGetTokenSuccess) {
      res.json({
        message: 'Get access token successfully!',
        data: [data],
        success: true,
      });
    } else {
      res.json({
        message: 'Get access token failed!',
        data: [],
        success: false,
      });
    }
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

async function getUserData(req: Request, res: Response<ApiResponse>) {
  const { username } = res.locals;

  try {
    const userData = await userService.getUserData(username);

    if (userData) {
      res.json({
        message: 'Get user data successfully!',
        data: [userData],
        success: true,
      });
    } else {
      res.json({
        message: 'User not found',
        data: [],
        success: false,
      });
    }
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
  login,
  getAccessToken,
  getUserData,
};
