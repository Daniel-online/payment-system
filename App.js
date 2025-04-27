// app.js

const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./config/database');

// Import routes
const authRoutes = require('./routes/auth');
const fundsRoutes = require('./routes/funds');
const paymentsRoutes = require('./routes/payments');
const transfersRoutes = require('./routes/transfers');
const balanceRoutes = require('./routes/balance');
const settingsRoutes = require('./routes/settings');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/funds', fundsRoutes);
app.use('/api/payments', paymentsRoutes);
app.use('/api/transfers', transfersRoutes);
app.use('/api/balance', balanceRoutes);
app.use('/api/settings', settingsRoutes);

// Start server after DB is ready
const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    console.log('Database synced successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to sync database:', err);
  });

