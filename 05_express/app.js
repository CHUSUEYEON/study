const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function (req, res) {
  // res.send("hello express");
  res.render("index");
});

app.get("/getForm", function (req, res) {
  res.render("result", {
    userInfo: req.query,
  });
});

app.listen(PORT, function (req, res) {
  console.log(`http://localhost:${PORT}`);
});
