// Category model
import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize';

const ModelHasTag = sequelize.define(
    'ModelHasTag',
    {
        model_type: { type: DataTypes.STRING, allowNull: false, length: 20 },
        tag_id: { type: DataTypes.INTEGER, allowNull: false },
        model_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
        tableName: 'model_has_tags',
        timestamps: true,
    },
);

export default ModelHasTag;
