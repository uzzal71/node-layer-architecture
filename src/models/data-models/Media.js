// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const Media = sequelize.define(
    'Media',
    {
        model_type: { type: DataTypes.STRING(20), allowNull: false },
        model_id: { type: DataTypes.INTEGER, allowNull: false },
        key: { type: DataTypes.STRING(20), allowNull: false },
        file_type: { type: DataTypes.STRING(20), allowNull: false },
        file_extension: { type: DataTypes.STRING(10), allowNull: false },
    },
    {
        tableName: 'media',
        timestamps: true,
    },
);

export default Media;
