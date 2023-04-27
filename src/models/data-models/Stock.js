// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const Stock = sequelize.define(
    'Stock',
    {
        batch: { type: DataTypes.STRING, allowNull: false, length: 20 },
        stock_qty: { type: DataTypes.INTEGER, allowNull: false },
        price: { type: DataTypes.DOUBLE, allowNull: false },
        img: { type: DataTypes.INTEGER, allowNull: false }
    },
    {
        tableName: 'stocks',
        timestamps: true,
    },
);

export default Stock;
