const router = require("express").Router();
const { Checking, Savings } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const checkingData = await Checking.findOne({
      where: {
        user_id: req.session.user_id,
      },
    });
    const savingsData = await Savings.findOne({
      where: {
        user_id: req.session.user_id,
      },
    });
    if (!checkingData && !savingsData) {
      // If no checking and no savings account found, redirect to newuser page
      res.render("homepage", {
        logged_in: req.session.logged_in,
        isHomepage: true,
        hasNoAccounts: true,
      });
    } else if (checkingData && !savingsData) {
      const checking = checkingData ? checkingData.get({ plain: true }) : null;
      res.render("homepage", {
        checking,
        logged_in: req.session.logged_in,
        isHomepage: true,
        hasAccounts: true,
        hasCheckingAccount: true,
        hasNoSavings: true,
      });
    } else if (!checkingData && savingsData) {
      const savings = savingsData ? savingsData.get({ plain: true }) : null;
      res.render("homepage", {
        savings,
        logged_in: req.session.logged_in,
        isHomepage: true,
        hasAccounts: true,
        hasSavingsAccount: true,
        hasNoChecking: true,
      });
    } else {
      const checking = checkingData ? checkingData.get({ plain: true }) : null;
      const savings = savingsData ? savingsData.get({ plain: true }) : null;
      res.render("homepage", {
        savings,
        checking,
        logged_in: req.session.logged_in,
        isHomepage: true,
        hasAccounts: true,
        hasBothAccounts: true,
        hasCheckingAccount: true,
        hasSavingsAccount: true,
    });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login", {
    isLoginPage: true,
  });
});
router.get("/register", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("register", {
    isRegisterPage: true,
  });
});

router.get("/checking", withAuth, async (req, res) => {
  // Added withAuth middleware here for consistency
  try {
    const checkingData = await Checking.findOne({
      where: {
        user_id: req.session.user_id,
      },
    });
    const savingsData = await Savings.findOne({
      where: {
        user_id: req.session.user_id,
      },
    });

    const checking = checkingData.get({ plain: true });

    if (savingsData && checkingData) {
      res.render("checking", {
      checking,
      logged_in: req.session.logged_in,
      hasAccounts: true,
      hasBothAccounts:true,
      });
    } else if (!checkingData) {
      res.redirect("/");
      return;
    } else {
      res.render("checking", {
        checking,
        logged_in: req.session.logged_in,
        hasAccounts: true,
        hasCheckingAccount: true,
        hasNoSavings: true,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/savings", withAuth, async (req, res) => {
  // Added withAuth middleware here for consistency
  try {
    const checkingData = await Checking.findOne({
      where: {
        user_id: req.session.user_id,
      },
    });
    const savingsData = await Savings.findOne({
      where: {
        user_id: req.session.user_id,
      },
    });

    const savings = savingsData.get({ plain: true });

    if (savingsData && checkingData) {
      res.render("savings", {
      savings,
      logged_in: req.session.logged_in,
      hasAccounts: true,
      hasBothAccounts:true,
      });
    } else if (!savingsData) {
      res.redirect("/");
      return;
    } else {
      res.render("savings", {
        savings,
        logged_in: req.session.logged_in,
        hasAccounts: true,
        hasSavingsAccount: true,
        hasNoChecking: true,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;