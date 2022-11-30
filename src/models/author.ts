import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const authorsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nickname: { type: String, required: false },
  dateOfBirth: { type: String, default: false },
});

authorsSchema.plugin(uniqueValidator);

export default mongoose.model('books', authorsSchema);
