// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const SocialLink = sequelize.define(
    ' SocialLink',
    {
        platform: { type: DataTypes.STRING, allowNull: false, length: 20 },
        model_type: { type: DataTypes.STRING, allowNull: false, length: 20 },
        model_id: { type: DataTypes.INTEGER, allowNull: false }
    },
    {
        tableName: 'social_links',
        timestamps: true,
    }
);

export default SocialLink;
