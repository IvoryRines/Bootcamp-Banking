const { User } = require("../models");

const userData = [
  {
    username: "RandomUser1",
    email: "pauldsherrrill@yahoo.com",
    password: "password1",
  },
  {
    username: "RandomUser2",
    email: "sherrillpaul21@gmail.com",
    password: "password2",
  },
  {
    username: "RandomUser3",
    email: "davidmsherrill@yahoo.com",
    password: "password3",
  },
];

const seedUsers = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    return: true,
  });

module.exports = seedUsers;
