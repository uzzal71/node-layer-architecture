// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const MetaInformation = sequelize.define(
    'MetaInformation',
    {
        model_type: { type: DataTypes.STRING, allowNull: false, length: 20 },
        model_id: { type: DataTypes.INTEGER, allowNull: false },
        key: { type: DataTypes.STRING, allowNull: true, length: 20 },
        value: { type: DataTypes.TEXT, allowNull: false },
    },
    {
        tableName: 'meta_informations',
        timestamps: true,
    },
);

export default MetaInformation;
