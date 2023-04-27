// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const Tag = sequelize.define(
    'Tag',
    {
        tag_name: { type: DataTypes.STRING, allowNull: false, length: 50 },
    },
    {
        tableName: 'tags',
        timestamps: true,
    },
);

export default Tag;
