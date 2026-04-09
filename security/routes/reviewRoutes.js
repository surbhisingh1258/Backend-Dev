const express = require("express");
const { addReview } = require("../controller/reviewController");
const { isAuth } = require("authMiddleware");

const router = express.Router();

router.post("/", isAuth, addReview);

module.exports = router;