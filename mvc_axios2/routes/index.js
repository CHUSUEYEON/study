const controller = require("../controllers/Cmain");
const express = require("express");
const router = express.Router();

router.get("/", controller.main);
router.post("/axios", controller.comment);

module.exports = router;
