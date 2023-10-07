import mongoose from 'mongoose';
import { authorSchema, bookSchema } from './schema.js';

export const authorModel = mongoose.model('Author', authorSchema);
export const bookModel = mongoose.model('Book', bookSchema);