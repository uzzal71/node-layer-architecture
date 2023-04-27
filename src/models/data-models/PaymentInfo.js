// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const PaymentInfo = sequelize.define(
    'PaymentInfo',
    {
        service: { type: DataTypes.STRING, allowNull: false, length: 50 },
        order_id: { type: DataTypes.INTEGER, allowNull: false },
        data: { type: DataTypes.STRING, allowNull: false, length: 50 },
        client: { type: DataTypes.STRING, allowNull: false, length: 50 },
    },
    {
        tableName: 'payment_info',
        timestamps: true,
    }
);

export default PaymentInfo;
