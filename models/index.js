const User = require("./User");
const Checking = require("./Checking");
const Savings = require("./Savings");

User.hasOne(Checking, {
  foreignKey: "user_id",
  onDelete: 'CASCADE'
});

User.hasOne(Savings, {
  foreignKey: "user_id",
  onDelete: 'CASCADE',
});

Checking.belongsTo(User, {
  foreignKey: "user_id",
});

Savings.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Checking, Savings };
