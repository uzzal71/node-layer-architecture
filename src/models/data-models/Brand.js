// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const Brand = sequelize.define(
    'Brand',
    {
        parent_id: { type: DataTypes.SMALLINT, allowNull: true, default: 0 },
        name: { type: DataTypes.STRING, allowNull: false, length: 50 },
        logo: { type: DataTypes.INTEGER, allowNull: false },
        slug: { type: DataTypes.STRING(50), allowNull: false },
    },
    {
        tableName: 'brands',
        timestamps: true,
    },
);

export default Brand;
