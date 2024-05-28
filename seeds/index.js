const seedUsers = require('./user-seeds');
const seedCheckings = require('./checking-seeds');
const seedSavings = require('./savings-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedCheckings();
  console.log('\n----- CHECKINGS SEEDED -----\n');

  await seedSavings();
  console.log('\n----- SAVINGS SEEDED -----\n');
};

seedAll();
