const { Savings } = require('../models');

const savingsData = [
    {
        account_number: 444444444,
        account_balance: 40000.00,
        user_id: 1,
    },
    {
        account_number: 555555555,
        account_balance: 50000.00,
        user_id: 3,
    },
];

const seedSavings = () => Savings.bulkCreate(savingsData);

module.exports = seedSavings;