exports.main = (req, res) => {
  res.render("index");
};

exports.comment = (req, res) => {
  res.send(req.body);
};
