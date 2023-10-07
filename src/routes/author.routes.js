import Router from 'express';
const router = Router();
import { indexAuthors, storeAuthor } from '../controllers/author.controllers.js';

// Define route for "/authors"
router.get('/authors', indexAuthors);
router.post('/authors', storeAuthor);

export default router;