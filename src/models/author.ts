import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const authorsSchema = new mongoose.Schema({
  name: { type: 'string', required: true },
  nickname: { type: 'string', required: false },
  dateOfBirth: { type: 'string', default: false },
});

authorsSchema.plugin(uniqueValidator);

module.exports = mongoose.model('books', authorsSchema);
