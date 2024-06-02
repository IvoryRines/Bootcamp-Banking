const { Checking } = require('../models');

const checkingData = [
    {
        account_number: 111111111,
        account_balance: 10000.00,
        user_id: 1,
    },
    {
        account_number: 222222222,
        account_balance: 20000.00,
        user_id: 2,
    },
];

const seedCheckings = () => Checking.bulkCreate(checkingData);

module.exports = seedCheckings;
