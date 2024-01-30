const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

const a = "hi123";
const b = "1234";
app.post("/axios", (req, res) => {
  console.log(req.body);
  const { id, pw } = req.body;
  if (id == a && pw == b) {
    res.send({
      isUser: true,
    });
  } else {
    res.send({
      isUser: false,
    });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
