// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const OrderDetail = sequelize.define(
    'OrderDetail',
    {
        order_id: { type: DataTypes.INTEGER, allowNull: false },
        shop_id: { type: DataTypes.INTEGER, allowNull: false },
        product_id: { type: DataTypes.INTEGER, allowNull: false },
        unit_price: { type: DataTypes.DOUBLE, allowNull: false },
        qty: { type: DataTypes.INTEGER, allowNull: false },
        tax_amount: { type: DataTypes.DOUBLE, allowNull: false, default: 0.0 },
        shipping_cost: { type: DataTypes.DOUBLE, allowNull: false, default: 0.0 },
        discount: { type: DataTypes.DOUBLE, allowNull: false, default: 0.0 },
        coupon_code: { type: DataTypes.STRING, allowNull: false, length: 20 },
        delivery_status: { type: DataTypes.ENUM('paid'), allowNull: false },
        payment_status: { type: DataTypes.ENUM('paid'), allowNull: false },
        pickup_time: { type: DataTypes.STRING, allowNull: false, length: 20 },
        instruction: { type: DataTypes.TEXT, allowNull: false },
        spcial_instruction: { type: DataTypes.TEXT, allowNull: false },
    },
    {
        tableName: 'order_details',
        timestamps: true,
    },
);

export default OrderDetail;
