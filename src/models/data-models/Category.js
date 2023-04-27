// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';
import Media from './Media';

const Category = sequelize.define(
    'Category',
    {
        parent_id: { type: DataTypes.SMALLINT, allowNull: true },
        name: { type: DataTypes.STRING, allowNull: false, length: 50 },
        index: { type: DataTypes.SMALLINT, allowNull: true },
        banner: { type: DataTypes.INTEGER, allowNull: true },
        icon: { type: DataTypes.INTEGER, allowNull: true },
        slug: { type: DataTypes.STRING, allowNull: false, length: 50 },
    },
    {
        tableName: 'categories',
        timestamps: true,
    },
);

Category.hasMany(Media, {
    foreignKey: { name: 'model_id', allowNull: true },
    constraints: true,
    // scope: {
    //     model_type: 'Category',
    // },
});
export default Category;
