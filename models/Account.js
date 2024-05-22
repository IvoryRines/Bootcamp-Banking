const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Account extends Model {}

Account.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    account_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // do we want to display this 
    //info right away, or wait for them to click on the account type?
    
    // account_number: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    // },
    // account_balance: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    // }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "account",
  }
);

module.exports = Account;
