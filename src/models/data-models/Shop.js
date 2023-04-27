// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const Shop = sequelize.define(
    'Shop',
    {
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        logo: { type: DataTypes.INTEGER, allowNull: false },
        banner: { type: DataTypes.INTEGER, allowNull: false },
        slider: { type: DataTypes.INTEGER, allowNull: false },
        latitude: { type: DataTypes.STRING, allowNull: false, length: 20 },
        longitude: { type: DataTypes.STRING, allowNull: false, length: 20 },
        radius: { type: DataTypes.INTEGER, allowNull: false },
        radius_unit: { type: DataTypes.STRING, allowNull: false, length: 11 },
        order_minimum_amount: { type: DataTypes.DOUBLE, allowNull: false },
        pickup_status: { type: DataTypes.SMALLINT, allowNull: false },
        pickup_time: { type: DataTypes.STRING, allowNull: false, length: 20 },
        description: { type: DataTypes.TEXT, allowNull: false },
        estimation_delivery_time: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
        tableName: 'shops',
        timestamps: true,
    }
);

export default Shop;
