import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const bookAuthorSchema = new mongoose.Schema({
  authorId: { type: String, required: true },
  bookId: { type: String, required: true },
});

bookAuthorSchema.plugin(uniqueValidator);

export default mongoose.model('bookAuthors', bookAuthorSchema);
