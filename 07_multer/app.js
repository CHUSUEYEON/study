const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/public", express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/");
    },
  }),
});

app.get("/", (req, res) => {
  res.send("hihi");
});

app.listen(PORT, function () {
  console.log(`${PORT} is open!!!`);
  console.log(`http://localhost:${PORT}`);
});
