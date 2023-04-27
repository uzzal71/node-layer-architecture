// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const ProductDetail = sequelize.define(
    ' ProductDetail',
    {
        product_id: { type: DataTypes.INTEGER, allowNull: false },
        short_description: { type: DataTypes.TEXT, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: false },
        service_description: { type: DataTypes.TEXT, allowNull: false },
        cash_on_delivery: { type: DataTypes.INTEGER, allowNull: false },
        lowest_qty: { type: DataTypes.INTEGER, allowNull: false },
        estimation_shipping_days: { type: DataTypes.INTEGER, allowNull: false },
        view_count: { type: DataTypes.INTEGER, allowNull: false },
        has_pickup: { type: DataTypes.INTEGER, allowNull: false }
    },
    {
        tableName: ' product_details',
        timestamps: true,
    }
);

export default ProductDetail;
