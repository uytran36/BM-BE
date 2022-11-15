export type UserType = {
  username: string;
  password: string;
  name: string;
  dateOfBirth: Date;
  email: string;
  type: string;
  salt: string;
};

export type ApiResponse = {
  message: string;
  data: Array<object>;
  success: boolean;
};

export type LoginResponse = {
  isLoginSuccess: boolean;
  data: object;
  err?: any;
};
