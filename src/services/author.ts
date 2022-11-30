import { AuthorType } from '../types';
import Author from '../models/author';

const addAuthor = (author: AuthorType) => Author.create(author);

export default {
  addAuthor,
};
