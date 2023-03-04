import { BookAuthorType, BookType } from '../types';
import Book from '../models/book';
import BookAuthor from '../models/bookAuthor';

const addBook = async (bookData: BookType) => {
  const book = await Book.create(bookData);
  const bookAuthorInfo: BookAuthorType = {
    bookId: book._id.toString(),
    authorId: bookData.authorId,
  };

  return BookAuthor.create(bookAuthorInfo);
};

const getBooks = async (page: number, pageSize: number) => {
  const books = await Book.find()
    .skip((page - 1) * pageSize)
    .limit(pageSize);
  return books;
};

export default { addBook, getBooks };
