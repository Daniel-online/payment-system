const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/database');

class Settings extends Model {}
Settings.init({
  key: { type: DataTypes.STRING, primaryKey: true },
  value: { type: DataTypes.FLOAT }
}, { sequelize, modelName: 'Settings', timestamps: false });

module.exports = Settings;