// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const Cart = sequelize.define(
    'Cart',
    {
        guest_user_id: { type: DataTypes.STRING(20), allowNull: true, default: null },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        logo: { type: DataTypes.INTEGER, allowNull: false },
        slug: { type: DataTypes.STRING(50), allowNull: false },
        product_id: { type: DataTypes.INTEGER, allowNull: false },
        variation_slug: { type: DataTypes.STRING(20), allowNull: false },
        variation_batch: { type: DataTypes.STRING(20), allowNull: false },
        price: { type: DataTypes.DOUBLE, allowNull: false },
        tax: { type: DataTypes.DOUBLE, allowNull: false },
        shipping_cost: { type: DataTypes.DOUBLE, allowNull: false },
        pickup_point: { type: DataTypes.STRING(50), allowNull: false },
        discount: { type: DataTypes.DOUBLE, allowNull: false },
        coupon_code: { type: DataTypes.STRING(20), allowNull: false },
        qty: { type: DataTypes.INTEGER, allowNull: false },
        pickup_status: { type: DataTypes.INTEGER, allowNull: false },
        pickup: { type: DataTypes.STRING(20), allowNull: false },
    },
    {
        tableName: 'carts',
        timestamps: true,
    },
);

export default Cart;
