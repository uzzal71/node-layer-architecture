// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const DeliveryCharge = sequelize.define(
    'DeliveryCharge',
    {
        product_id: { type: DataTypes.INTEGER, allowNull: false },
        from_unit: { type: DataTypes.BIGINT, allowNull: false },
        to_unit: { type: DataTypes.BIGINT, allowNull: false },
        cost: { type: DataTypes.DOUBLE, allowNull: false },
        type: { type: DataTypes.INTEGER, allowNull: true, default: null },
    },
    {
        tableName: 'delivery_charges',
        timestamps: true,
    },
);

export default DeliveryCharge;
