import mongoose, { Schema } from 'mongoose';
import validator from 'validator';

import { passwordReg } from './user.validation';


const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
    trim: true,
    validate: {
      validator(email){
        return validator.isEmail(email);
      },
      message: '{VALUE} is not a valid email!'
    }
  },

  firstName: {
    type: String,
    required: [true, 'First Name is required!'],
    trim: true
  },

  lastName: {
    type: String,
    required: [true, 'Last Name is required!'],
    trim: true
  },

  userName: {
    type: String,
    required: [true, 'User Name is required!'],
    trim: true,
    unique: true
  },

  password: {
    type: String,
    required: [true, 'Password is required!'],
    trim: true,
    minlength: [6, 'Password is too short!'],
    validate: {
      validator(password){
        return passwordReg.test(password);
      },
      message: `{VALUE} is not valid password`
    }
  }
});

export default mongoose.model('User', UserSchema);
