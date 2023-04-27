// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const CouponUser = sequelize.define(
    'CouponUser',
    {
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        coupon_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
        tableName: 'coupon_users',
        timestamps: true,
    },
);

export default CouponUser;
