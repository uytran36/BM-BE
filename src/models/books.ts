import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const bookSchema = new mongoose.Schema({
  name: { type: 'string', required: true },
  authorId: { type: 'string', required: true },
  publishser: { type: 'string', required: true },
  description: { type: 'string', default: false },
  publishedOn: { type: 'string', default: false },
  edition: { type: 'string', default: false },
});

bookSchema.plugin(uniqueValidator);

module.exports = mongoose.model('books', bookSchema);
