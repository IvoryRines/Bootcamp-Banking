const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Saving extends Model {}

Saving.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    account_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    account_balance: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_transaction_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    account_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "account",
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

module.exports = Saving;
