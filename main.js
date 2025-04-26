import sequelize from './config/database';
import app from './app';

sequelize.sync()
  .then(() => {
    console.log('Database synced');
    app.listen(3000, () => console.log('Server running on port 3000'));
  })
  .catch(err => {
    console.error('Failed to sync database:', err);
    process.exit(1); // para falhar logo caso não conecte
  });
