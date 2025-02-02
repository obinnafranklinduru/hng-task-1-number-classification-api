const express = require("express");
const router = express.Router();
const { validateNumberParam } = require("../middlewares/validation.middleware");
const { classifyNumber } = require("../controllers/number.controller");

router.get("/classify-number", validateNumberParam, classifyNumber);

module.exports = router;
