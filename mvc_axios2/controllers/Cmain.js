exports.main = (req, res) => {
  res.render("index");
};

exports.comment = (req, res) => {
  console.log(req.body);
  res.send(req.body);
};
