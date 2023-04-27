// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const Tax = sequelize.define(
    'Tax',
    {
        product_id: { type: DataTypes.INTEGER, allowNull: false },
        amount: { type: DataTypes.DOUBLE, allowNull: false }
    },
    {
        tableName: 'taxes',
        timestamps: true,
    },
);

export default Tax;
