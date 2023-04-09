import { gerCategoryService, saveCategoryService } from '../services/CategoryService';

export const getAllCategories = async (req, res, next) => {
    try {
        const categories = await gerCategoryService();
        return res.status(200).json({ data: categories });
    } catch (error) {
        return next(error, req, res);
    }
};

export const saveCategory = async (req, res, next) => {
    try {
        const category = await saveCategoryService(req.body);
        return res.status(200).json({ data: category });
    } catch (error) {
        return next(error, req, res);
    }
};

export default {};
