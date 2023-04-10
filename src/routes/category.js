import express from 'express';

import { getAllCategories, saveCategory } from '../controllers/categoryController';
import { handleValidation } from '../middlewares';
import validators from '../models/request-models';

const router = express.Router();

router.get('/', getAllCategories);
router.post('/', handleValidation(validators.categorySchemaValidate), saveCategory);

export default router;
