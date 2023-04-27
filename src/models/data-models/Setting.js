// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const Setting = sequelize.define(
    ' Setting',
    {
        key_name: { type: DataTypes.STRING, allowNull: false, length: 50 },
        value: { type: DataTypes.STRING, allowNull: false, length: 50 }
    },
    {
        tableName: 'settings',
        timestamps: true,
    }
);

export default Setting;
