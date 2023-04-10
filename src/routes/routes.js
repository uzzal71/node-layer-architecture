import express from 'express';

import category from './category';

const router = express.Router();

router.use('/categories', category);

export default router;
