const Controller = require("../controllers/Cmain");
const express = require("express");
const router = express.Router();

router.get("/", Controller.main);

router.post("/axios", Controller.axios);

module.exports = router;
