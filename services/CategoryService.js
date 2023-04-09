import models from '../models/data-models';
import categoryViewModel from '../models/view-models/category-view-model';

export const gerCategoryService = () => {
    const { Category } = models;
    const categories = Category.find({});
    return categoryViewModel(categories);
};

export const saveCategoryService = (req, res) => {
    try {
        res.status(200).json({
            message: 'Save categories',
        });
    } catch (error) {
        console.log(error);
    }
};

export default {};
