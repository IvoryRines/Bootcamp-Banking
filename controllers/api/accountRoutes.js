const router = require("express").Router();
const { Checking, Savings } = require("../../models");
const withAuth = require("../../utils/auth");

// Create checking account
router.post("/checking", withAuth, async (req, res) => {
  try {
    const dbCheckingData = await Checking.findOne(
      {
        where: {
          user_id: req.session.user_id,
        }
      }
    )

    if (dbCheckingData) {
      res
        .status(400)
        .json({ message: "You already have a checking account" });
      return;
    } else {
      const dbCreateCheckingData = await Checking.create({
        account_number: req.body.accountNumber,
        account_balance: req.body.accountBalance,
        user_id: req.session.user_id
      });
      res.status(200).json(dbCreateCheckingData);
    }

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create savings account
router.post("/savings", withAuth, async (req, res) => {
  try {
    const dbSavingsData = await Savings.findOne(
      {
        where: {
          user_id: req.session.user_id,
        }
      }
    )

    if (dbSavingsData) {
      res
        .status(400)
        .json({ message: "You already have a savings account" });
      return;
    } else {
      const dbCreateSavingsData = await Savings.create({
        account_number: req.body.accountNumber,
        account_balance: req.body.accountBalance,
        user_id: req.session.user_id
      });
      res.status(200).json(dbCreateSavingsData);
    }

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Deposit and withdraw money to and from checking account
router.put("/checking", withAuth, async (req, res) => {
  try {
    const dbCheckingData = await Checking.update(
      {
        account_balance: req.body.newBalance,
      },
      {
        where: {
          user_id: req.session.user_id,
        },
      }
    );
    res.status(200).json(dbCheckingData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Transfer money from checking to savings
router.put("/checking/transfer", withAuth, async (req, res) => {
  try {
    const dbCheckingData = await Checking.update(
      {
        account_balance: req.body.newBalance,
      },
      {
        where: {
          user_id: req.session.user_id,
        },
      }
    );

    const transferData = await Savings.findOne({
      where: {
        user_id: req.session.user_id,
      },
    });

    transferData.account_balance =
      req.body.transfer + transferData.account_balance;

    const dbSavingsData = await Savings.update(
      {
        account_balance: transferData.account_balance,
      },
      {
        where: {
          user_id: req.session.user_id,
        },
      }
    );

    res.status(200).json(dbCheckingData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Withdraw and deposit money to and from savings account
router.put("/savings", withAuth, async (req, res) => {
  try {
    const dbSavingsData = await Savings.update(
      {
        account_balance: req.body.newBalance,
      },
      {
        where: {
          user_id: req.session.user_id,
        },
      }
    );
    res.status(200).json(dbSavingsData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Transfer money from savings to checking
router.put("/savings/transfer", withAuth, async (req, res) => {
  try {
    const dbSavingsData = await Savings.update(
      {
        account_balance: req.body.newBalance,
      },
      {
        where: {
          user_id: req.session.user_id,
        },
      }
    );

    const transferData = await Checking.findOne({
      where: {
        user_id: req.session.user_id,
      },
    });

    transferData.account_balance =
      req.body.transfer + transferData.account_balance;

    const dbCheckingData = await Checking.update(
      {
        account_balance: transferData.account_balance,
      },
      {
        where: {
          user_id: req.session.user_id,
        },
      }
    );

    res.status(200).json(dbSavingsData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
