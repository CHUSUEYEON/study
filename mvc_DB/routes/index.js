const controller = require("../controllers/Cmain");
const express = require("express");
const router = express.Router();

router.get("/", controller.main);
router.get("/members", controller.check);

module.exports = router;
