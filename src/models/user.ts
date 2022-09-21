import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dateOfBirth: { type: Date, required: false },
  email: { type: String, required: true },
  username: {
    type: String,
    required: true,
    unique: true,
    maxLength: 20,
  },
  password: { type: String, required: true },
  type: { type: String, required: true },
  salt: { type: String, required: true, unique: true },
});

userSchema.plugin(uniqueValidator);

export default mongoose.model('users', userSchema);
