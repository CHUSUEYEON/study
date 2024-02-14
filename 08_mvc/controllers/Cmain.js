const User = require("../models/index");

exports.main = (req, res) => {
  res.render("index");
};

exports.axios = (req, res) => {
  console.log(req.body);
  res.send(req.body);
};
