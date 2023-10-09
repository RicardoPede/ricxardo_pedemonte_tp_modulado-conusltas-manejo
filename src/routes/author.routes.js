import Router from 'express';
const router = Router();
import { indexAuthors, storeAuthor } from '../controllers/author.controllers.js';
import { validateSchema } from '../middleware/validation.js';

// Define route for "/authors"
router.get('/api/authors', indexAuthors);
router.post('/api/authors', validateSchema, storeAuthor);

export default router;