import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const Address = sequelize.define(
    'Address',
    {
        model_type: { type: DataTypes.STRING(20), allowNull: false },
        model_id: { type: DataTypes.SMALLINT, allowNull: false },
        address_line1: { type: DataTypes.TEXT, allowNull: false },
        address_line2: { type: DataTypes.TEXT, allowNull: true },
        country: { type: DataTypes.STRING(20), allowNull: false },
        street_address: { type: DataTypes.STRING(100), allowNull: false },
        state: { type: DataTypes.STRING(20), allowNull: false },
        zip: { type: DataTypes.STRING(20), allowNull: false },
    },
    {
        tableName: 'addresses',
        timestamps: true,
    },
);

export default Address;
