const Member = require("../models/members");

exports.main = (req, res) => {
  res.render("index");
};

exports.check = (req, res) => {
  res.send("good");
  // console.log(Member.membersinfo());
  // res.render("members", {
  //   membersinfo: Member.membersinfo(),
  // });
};
