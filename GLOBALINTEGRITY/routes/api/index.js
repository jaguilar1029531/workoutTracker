const router = require("express").Router();
// const bookRoutes is here to remind me how this code is written
// const bookRoutes = require("./books");

const homeRoutes = require("./home");
const signupRoutes = require("./signup");
const loginRoutes = require("./login");
const memhomeRoutes = require("./memhome")


// Book routes is here to remind me how this code is written
// router.use("/books", bookRoutes);

// here i will model the routes i actually need; home, signup, login, memhome
// these are not set up beyond this file yet
router.use("/home", homeRoutes);
router.use("/signup", signupRoutes);
router.use("/login", loginRoutes);
router.use("/memhome", memhomeRoutes);

module.exports = router;
