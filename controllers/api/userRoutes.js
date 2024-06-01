const router = require("express").Router();
const { User, Checking, Savings }= require("../../models");

// CREATE new user
router.post("/register", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.usernameInput,
      email: req.body.emailInput,
      password: req.body.passwordInput,
    });
    res.json(dbUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.logged_in = true;
      req.session.username = dbUserData.username;
      req.session.user_id = dbUserData.id;

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.get("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
