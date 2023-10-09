import mongoose from 'mongoose';
import { authorSchema } from './authorSchema.js';
import { bookSchema } from './bookSchema.js';
import { userSchema } from './userSchema.js';

export const authorModel = mongoose.model('Author', authorSchema);
export const bookModel = mongoose.model('Book', bookSchema);
export const userModel = mongoose.model('User', userSchema);