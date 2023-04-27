// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const Product = sequelize.define(
    'Product',
    {
        name: { type: DataTypes.STRING, allowNull: false, length: 255 },
        slug: { type: DataTypes.STRING, allowNull: false, length: 255 },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        shop_id: { type: DataTypes.INTEGER, allowNull: false },
        category_id: { type: DataTypes.INTEGER, allowNull: false },
        brand_id: { type: DataTypes.INTEGER, allowNull: false },
        photo: { type: DataTypes.INTEGER, allowNull: false },
        videos: { type: DataTypes.INTEGER, allowNull: false },
        thumbnail: { type: DataTypes.INTEGER, allowNull: false },
        tags: { type: DataTypes.STRING, allowNull: false, length: 255 },
        video: { type: DataTypes.STRING, allowNull: false, length: 255 },
        is_published: { type: DataTypes.SMALLINT, allowNull: false },
        discount: { type: DataTypes.DOUBLE, allowNull: false },
        minimum_qty: { type: DataTypes.INTEGER, allowNull: false },
        number_of_sales: { type: DataTypes.INTEGER, allowNull: false },
        meta_title: { type: DataTypes.STRING, allowNull: false, length: 255 },
        meta_description: { type: DataTypes.TEXT, allowNull: false },
        average_rating: { type: DataTypes.DOUBLE, allowNull: false },
        uuid: { type: DataTypes.STRING, allowNull: false, length: 20 }
    },
    {
        tableName: 'products',
        timestamps: true,
    }
);

export default Product;
