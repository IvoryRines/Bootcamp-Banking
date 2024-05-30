const router = require("express").Router();
const { User, Checking, Savings } = require("../models");
const withAuth = require("../utils/auth");
router.get("/", withAuth, async (req, res) => {
  try {
    // const userData = await User.findAll({
    //   attributes: { exclude: ["password"] },
    //   order: [["name", "ASC"]],
    // });
    // const users = userData.map((project) => project.get({ plain: true }));

    // use sequelize and pull the data for the checking & savings where the userId mataches what is in session

    const checkingData = await Checking.findOne({
      where: {
        user_id: req.session.user_id,
      },
    });

    const checking = checkingData.get({ plain: true });

    const savingsData = await Savings.findOne({
      where: {
        user_id: req.session.user_id,
      },
    });

    const savings = savingsData.get({ plain: true });

    res.render("homepage", {
      savings,
      checking,
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

router.get("/register", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("register");
});

module.exports = router;
