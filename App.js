const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./config/database');

// Importar as rotas
const authRoutes = require('./routes/auth');
const fundsRoutes = require('./routes/funds');
const paymentsRoutes = require('./routes/payments');
const transfersRoutes = require('./routes/transfers');
const balanceRoutes = require('./routes/balance');
const settingsRoutes = require('./routes/settings');

const app = express();
app.use(bodyParser.json());

// Configurar rotas
app.use('/api/auth', authRoutes);
app.use('/api/funds', fundsRoutes);
app.use('/api/payments', paymentsRoutes);
app.use('/api/transfers', transfersRoutes);
app.use('/api/balance', balanceRoutes);
app.use('/api/settings', settingsRoutes);

// Exportar o app
module.exports = app;
