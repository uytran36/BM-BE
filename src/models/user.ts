import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = new mongoose.Schema({
  name: { type: 'string', required: true },
  dateOfBirth: { type: Date, required: false },
  email: { type: 'string', required: true },
  username: { type: 'string', required: true },
  password: { type: 'string', required: true },
  gender: { type: 'string', required: true },
  type: { type: 'string', requied: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('users', userSchema);
