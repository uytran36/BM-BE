import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  publishser: { type: String, required: true },
  description: { type: String, default: false },
  publishedOn: { type: String, default: false },
  edition: { type: String, default: false },
});

bookSchema.plugin(uniqueValidator);

export default mongoose.model('books', bookSchema);
