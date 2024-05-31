const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Savings extends Model {}

Savings.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    account_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    account_balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      },
    },
    // last_transaction_date: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "saving",
  }
);

module.exports = Savings;
