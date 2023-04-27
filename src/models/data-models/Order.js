// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const Order = sequelize.define(
    'Order',
    {
        order_number: { type: DataTypes.STRING, allowNull: false, length: 32 },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        shipping_address: { type: DataTypes.INTEGER, allowNull: false },
        billing_address: { type: DataTypes.INTEGER, allowNull: false },
        delivery_status: { type: DataTypes.ENUM('paid'), allowNull: false },
        payment_type: { type: DataTypes.ENUM('paid'), allowNull: false },
        payment_status: { type: DataTypes.ENUM('paid'), allowNull: false },
        grand_total: { type: DataTypes.DOUBLE, allowNull: false },
        total_discount: { type: DataTypes.DOUBLE, allowNull: false, default: 0.0 },
    },
    {
        tableName: 'orders',
        timestamps: true,
    },
);

export default Order;
