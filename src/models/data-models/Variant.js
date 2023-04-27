// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const Variant = sequelize.define(
    'Variant',
    {
        product_id: { type: DataTypes.INTEGER, allowNull: false },
        option_id: { type: DataTypes.INTEGER, allowNull: true }
    },
    {
        tableName: 'variants',
        timestamps: true,
    },
);

export default Variant;
