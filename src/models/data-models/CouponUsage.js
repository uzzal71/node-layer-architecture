// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const CouponUsage = sequelize.define(
    'CouponUsage',
    {
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        coupon_id: { type: DataTypes.INTEGER, allowNull: false },
        discount_amount: { type: DataTypes.DOUBLE, allowNull: true },
    },
    {
        tableName: 'coupon_usages',
        timestamps: true,
    },
);

export default CouponUsage;
