const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  console.log(req.query);
  res.render("index");
  //   res.send("hihi");
});

app.get("/getForm", function (req, res) {
  res.render("result", {
    userInfo: req.query,
    addInfo: false,
  });
  console.log(req.query);
});

app.post("/", function (req, res) {
  res.render("index");
  console.log(req.body);
});

app.post("/postForm", function (req, res) {
  console.log(req.body);
  const postInfo = req.body;
  res.render("result", {
    userInfo: postInfo,
    addInfo: true,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
