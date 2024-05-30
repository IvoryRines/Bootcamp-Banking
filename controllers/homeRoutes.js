const router = require("express").Router();
const { User, Checking, Savings } = require("../models");
const withAuth = require("../utils/auth");
router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });
    const users = userData.map((project) => project.get({ plain: true }));
    res.render("homepage", {
      users,
      logged_in: req.session.logged_in,
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
  res.render("login");
});

router.get("/checking", withAuth, async (req, res) => {
  try {
    const checkingData = await Checking.findAll({
      attributes: ["account_number", "account_balance"]
    });
    const checking = checkingData.map((project) => project.get({ plain: true }));
    res.render("checking", {
      checking,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/savings", withAuth, async (req, res) => {
  try {
    const savingsData = await Savings.findAll({
      attributes: ["account_number", "account_balance"]
    });
    const savings = savingsData.map((project) => project.get({ plain: true }));
    res.render("savings", {
      savings,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
