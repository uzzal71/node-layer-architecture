// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const Coupon = sequelize.define(
    'Coupon',
    {
        status: { type: DataTypes.STRING, allowNull: false, length: 20 },
        service_category_id: { type: DataTypes.INTEGER, allowNull: false },
        code: { type: DataTypes.STRING, allowNull: true, length: 20 },
        limit_per_user: { type: DataTypes.INTEGER, allowNull: false },
        details: { type: DataTypes.STRING, allowNull: false },
        discount: { type: DataTypes.DOUBLE, allowNull: false },
        discount_type: { type: DataTypes.ENUM('amount', 'percent'), allowNull: false },
        max_discount: { type: DataTypes.DOUBLE, allowNull: false },
        min_cart_amount: { type: DataTypes.DOUBLE, allowNull: false },
        start_date: { type: DataTypes.DATE, allowNull: false, default: DataTypes.NOW },
        end_date: { type: DataTypes.DATE, allowNull: false, default: DataTypes.NOW },
    },
    {
        tableName: 'coupons',
        timestamps: true,
    },
);

export default Coupon;
