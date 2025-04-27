import Sequelize from 'sequelize';

const sequelize = new Sequelize('payments_db', 'user', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './db.sqlite' // for demo
});

export { sequelize };