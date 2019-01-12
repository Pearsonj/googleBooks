const db = require("../models");

// Defining methods for the bookController
module.exports = {
  login: (req, res) => {
      console.log(req.body);
      res.send({status: 200, message: "You are logged in"});
  }
};
