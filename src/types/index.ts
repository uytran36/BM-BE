export type UserType = {
  username: string;
  password: string;
  name: string;
  dateOfBirth: Date;
  email: string;
  type: string;
  salt: string;
};

export type BookType = {
  name: string;
  authorId: string;
  publishser: string;
  description?: string;
  publishedOn?: Date;
  edition?: string;
};

export type AuthorType = {
  name: string;
  nickname?: string;
  dateOfBirth?: Date;
};

export type BookAuthorType = {
  authorId: string;
  bookId: string;
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
