const router = require("express").Router();
const authController = require("../../controllers/authController");

// Matches with "/api/books"
router.route("/login")
  .post(authController.login);




module.exports = router;