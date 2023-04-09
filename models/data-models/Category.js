// Category model
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    parent_id: { type: String, default: 0 },
    name: { type: String, length: 50, required: true },
    slug: { type: String, length: 50, required: true },
    index: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
