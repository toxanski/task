const Sequelize = require('sequelize');

const sequelize = new Sequelize('practice', 'mysql', 'mysql', {
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

sequelize.sync()
  .then(() => console.log('синхронизаия с бд - успешно'))
  .catch((err) => console.log('синхронизаия с бд - ошибка', err.message));

module.exports = User;