// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const Option = sequelize.define(
    'Option',
    {
        type: { type: DataTypes.STRING, allowNull: false, length: 50 },
        key: { type: DataTypes.STRING, allowNull: false, length: 20 },
        value: { type: DataTypes.STRING, allowNull: false, length: 50 },
    },
    {
        tableName: 'options',
        timestamps: true,
    },
);

export default Option;
