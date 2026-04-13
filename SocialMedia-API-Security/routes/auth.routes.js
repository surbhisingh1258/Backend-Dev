const router = require("express").Router();
const { register } = require("../controllers/auth.controller");
const { validateRegister, validateRequest } = require("../middleware/validation.middleware");
const sanitizeRequest = require("../middleware/sanitize.middleware");

router.post(
  "/register",
  sanitizeRequest,
  validateRegister,
  validateRequest,
  register
);

module.exports = router;