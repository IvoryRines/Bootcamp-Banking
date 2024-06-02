const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "RandomUser1",
    email: "has2accounts@email.com",
    password: "password1",
  },
  {
    id: 2,
    username: "RandomUser2",
    email: "hascheckingaccount@email.com",
    password: "password2",
  },
  {
    id: 3,
    username: "RandomUser3",
    email: "hassavingsaccount@email.com",
    password: "password3",
  },
  {
    id: 4,
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
