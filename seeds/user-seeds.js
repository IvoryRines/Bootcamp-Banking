const { User } = require("../models");

const userData = [
  {
    username: "RandomUser1",
    email: "has2accounts@email.com",
    password: "password1",
  },
  {
    username: "RandomUser2",
    email: "hascheckingaccount@email.com",
    password: "password2",
  },
  {
    username: "RandomUser3",
    email: "hassavingsaccount@email.com",
    password: "password3",
  },
  {
    username: "RandomUser4",
    email: "hasnoaccounts@email.com",
    password: "password4",
  }
];

const seedUsers = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    return: true,
  });

module.exports = seedUsers;
