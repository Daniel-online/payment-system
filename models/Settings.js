import { DataTypes, Model } from "sequelize";
import { sequelize } from '../config/database';

class Settings extends Model { }

Settings.init({
    key: {type: DataTypes.STRING,primaryKey: true},
    value:{type: DataTypes.FLOAT}
}, {
    sequelize,
    modelName:'Settings',
    timestamps: true
})