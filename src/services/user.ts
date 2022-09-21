import bcrypt from 'bcryptjs';
import { ENV } from '../configs';
import User from '../models/user';
import { UserType } from '../types';

const createUser = (userData: UserType) => {
  const salt = bcrypt.genSaltSync(Math.floor(Math.random() * 10) + 10);
  const hashedPassword = bcrypt.hashSync(userData.password, salt);
  const pwdWithPepper = bcrypt.hashSync(hashedPassword, ENV.PEPPER);
  const data = { ...userData, salt, password: pwdWithPepper };

  return User.create(data);
};

export default {
  createUser,
};
