const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/database');

class User extends Model {}
User.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  totalFunds: { type: DataTypes.FLOAT, defaultValue: 0 },
  totalPoints: { type: DataTypes.FLOAT, defaultValue: 500 },
  pointsExpiration: { type: DataTypes.DATE, defaultValue: () => new Date(Date.now() + 365*24*60*60*1000) }
}, { sequelize, modelName: 'User' });

module.exports = User;