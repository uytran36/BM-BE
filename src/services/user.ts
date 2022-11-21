import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ENV } from '../configs';
import User from '../models/user';
import { LoginResponse, UserType } from '../types';

const createUser = (userData: UserType) => {
  const salt = bcrypt.genSaltSync(Math.floor(Math.random() * 3) + 10);
  const hashedPassword = bcrypt.hashSync(userData.password, salt);
  const pwdWithPepper = bcrypt.hashSync(hashedPassword, ENV.PEPPER);
  const data = { ...userData, salt, password: pwdWithPepper };

  return User.create(data);
};

const login = async (userData: UserType): Promise<LoginResponse> => {
  const user = await User.findOne({ username: userData.username });

  const salt = user?.salt;
  const hashedPassword = bcrypt.hashSync(userData.password, salt);
  const pwdWithPepper = bcrypt.hashSync(hashedPassword, ENV.PEPPER);

  if (user?.password === pwdWithPepper) {
    const dataForToken = {
      userId: user._id,
      username: userData.username,
    };
    const accessToken = jwt.sign(dataForToken, ENV.ACCESS_TOKEN_SECRET, {
      expiresIn: '6h',
    });

    const refreshToken = jwt.sign(dataForToken, ENV.REFRESH_TOKEN_SECRET, {
      expiresIn: '7d',
    });

    return {
      isLoginSuccess: true,
      data: { userId: user._id, accessToken, refreshToken },
    };
  }

  return {
    isLoginSuccess: false,
    data: {},
  };
};

const getAccessToken = async (refreshToken: string, username: string) => {
  const data: any = jwt.verify(refreshToken, ENV.REFRESH_TOKEN_SECRET);

  if (data.username === username) {
    const accessToken = jwt.sign(
      { userId: data.userId, username: data.username },
      ENV.ACCESS_TOKEN_SECRET,
      { expiresIn: '6h' },
    );
    return {
      isGetTokenSuccess: true,
      data: { accessToken },
    };
  }
  return {
    isGetTokenSuccess: false,
    data: {},
  };
};

const getUserData = async (username: string) => {
  const user = await User.findOne({ username }, { password: 0, salt: 0 });
  return user;
};

export default {
  createUser,
  login,
  getAccessToken,
  getUserData,
};
