const router = require('express').Router();
const { Checking, Savings } = require('../../models');
const withAuth = require('../../utils/auth');

// Create checking account
router.post('/checking', withAuth, async (req, res) => {
  try {
    const dbCheckingData = await Checking.create({
      account_number: req.body.account_number,
      account_balance: req.body.account_balance,
    });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
  res.render("checking");
});

// Create savings account
router.post('/savings', withAuth, async (req, res) => {
  try {
    const dbSavingsData = await Savings.create({
      account_number: req.body.account_number,
      account_balance: req.body.account_balance,
    });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
  res.render("savings");
});

// Withdraw and deposit money from checking account
router.put('/checking/:id', withAuth, async (req, res) => {
    try {
      const dbCheckingData = await Checking.update(
        {
          account_balance: req.body.account_balance
        },
        {
          where: {
            id: req.params.id,
          },
        }      
      );
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
    res.redirect("/checking");
});
  
// Withdraw and deposit money from savings account
router.put('/savings/:id', withAuth, async (req, res) => {
  try {
    const dbSavingsData = await Savings.update(
      {
        account_balance: req.body.account_balance
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  res.redirect("/savings");
});

module.exports = router;