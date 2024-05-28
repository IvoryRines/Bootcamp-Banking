const { Checking } = require('../models');

const checkingData = [
    {
        account_number: 1111111111,
        account_balance: 10000,
        user_id: 1,
    },
    {
        account_number: 2222222222,
        account_balance: 20000,
        user_id: 2,
    },
    {
        account_number: 3333333333,
        account_balance: 30000,
        user_id: 3,
    }
];

const seedCheckings = () => Checking.bulkCreate(checkingData);

module.exports = seedCheckings;
