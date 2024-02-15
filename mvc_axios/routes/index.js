const Controller = require("../controller/Cmain");
const express = require("express");
const router = express.Router();

router.get = ("/", Controller.main);

module.exports = router;
