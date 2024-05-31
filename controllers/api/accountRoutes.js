const router = require('express').Router();
const { Checking, Savings } = require('../../models');
const withAuth = require('../../utils/auth');

// Create checking account
router.post('/checking', async (req, res) => {
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
router.post('/savings', async (req, res) => {
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

// Deposit and withdraw money to and from checking account
router.put('/checking', async (req, res) => {
    try {
      const dbCheckingData = await Checking.update(
        {
          account_balance: req.body.newBalance
        },
        {
          where: {
            user_id: req.session.user_id,
          },
        }      
      );
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
    res.redirect("/checking");
});


// Transfer money from checking to savings
router.put('/checking/transfer', async (req, res) => {
  try {
    const dbCheckingData = await Checking.update(
      {
        account_balance: req.body.newBalance
      },
      {
        where: {
          user_id: req.session.user_id,
        },
      }      
    );

    const transferData = await Savings.findOne(
      {
        where: {
          user_id: req.session.user_id,
        }
      }
    )

    transferData.account_balance = req.body.transfer + transferData.account_balance

    const dbSavingsData = await Checking.update(
      transferData,
      {
        where: {
          user_id: req.session.user_id,
        },
      }      
    );
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  res.redirect("/checking");
});
  
// Withdraw and deposit money to and from savings account
router.put('/savings', async (req, res) => {
  try {
    const dbSavingsData = await Savings.update(
      {
        account_balance: req.body.newBalance
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

// Transfer money from savings to checking
router.put('/savings/transfer', async (req, res) => {
  try {
    const dbSavingsData = await Savings.update(
      {
        account_balance: req.body.newBalance
      },
      {
        where: {
          user_id: req.session.user_id,
        },
      }      
    );

    const transferData = await Checking.findOne(
      {
        where: {
          user_id: req.session.user_id,
        }
      }
    )

    transferData.account_balance = req.body.transfer + transferData.account_balance

    const dbCheckingData = await Checking.update(
      transferData,
      {
        where: {
          user_id: req.session.user_id,
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