import express from 'express';
import { getHomepage } from './controllers/homepage-controller.js';
import { getBook } from './controllers/book-controller.js';

const router = express.Router();

/** Homepage **/
router.get('/', getHomepage);

/** Book **/
router.get('/detail', getBook);

export default router;
