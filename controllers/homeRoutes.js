const router = require("express").Router();
const { User, Checking, Savings } = require("../models");
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
      return res.redirect("/newuser");
    } else if (checkingData && !savingsData) {
      // If checking found and no savings account found, redirect to opensavings page
      return res.redirect("/opensavings");
    } else if (!checkingData && savingsData) {
      // If no checking found but savings account is found, redirect to openchecking page
      return res.redirect("/openchecking");
    }
    const checking = checkingData ? checkingData.get({ plain: true }) : null;
    const savings = savingsData ? savingsData.get({ plain: true }) : null;
    res.render("homepage", {
      savings,
      checking,
      logged_in: req.session.logged_in,
      isHomepage: true,
    });
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
    if (!checkingData) {
      res.redirect("/");
      return;
    }
    const checking = checkingData.get({ plain: true });
    res.render("checking", {
      checking,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/savings", withAuth, async (req, res) => {
  // Added withAuth middleware here for consistency
  try {
    const savingsData = await Savings.findOne({
      where: {
        user_id: req.session.user_id,
      },
    });
    if (!savingsData) {
      res.redirect("/");
      return;
    }
    const savings = savingsData.get({ plain: true });
    res.render("savings", {
      savings,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// Route for newuser page
router.get("/newuser", withAuth, (req, res) => {
  res.render("newuser", {
    logged_in: req.session.logged_in,
    // isHomepage should get renamed. it excludes these pages from having the background image and i didn't realize i needed to apply it to the new user page as well.
    isHomepage: true,
  });
});

router.get("/opensavings", withAuth, (req, res) => {
  res.render("opensavings", {
    logged_in: req.session.logged_in,
    // isHomepage should get renamed. it excludes these pages from having the background image and i didn't realize i needed to apply it to the new user page as well.
    isHomepage: true,
  });
});

router.get("/openchecking", withAuth, (req, res) => {
  res.render("openchecking", {
    logged_in: req.session.logged_in,
    // isHomepage should get renamed. it excludes these pages from having the background image and i didn't realize i needed to apply it to the new user page as well.
    isHomepage: true,
  });
});
module.exports = router;
