const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Checking extends Model {}

Checking.init(
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
    modelName: "checking",
  }
);

module.exports = Checking;