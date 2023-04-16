// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const Category = sequelize.define(
    'Category',
    {
        parent_id: { type: DataTypes.SMALLINT, allowNull: true, default: 0 },
        name: { type: DataTypes.STRING, allowNull: false, length: 50 },
        slug: { type: DataTypes.STRING, allowNull: false, length: 50 },
        index: { type: DataTypes.SMALLINT, allowNull: true, default: 0 },
    },
    {
        tableName: 'categories',
        timestamps: true,
    },
);

export default Category;
