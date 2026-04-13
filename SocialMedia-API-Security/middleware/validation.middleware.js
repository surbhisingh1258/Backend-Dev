const { body, validationResult } = require("express-validator");

const validateRegister = [
  body("username").isLength({ min: 3 }).trim(),
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
];

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validateRegister, validateRequest };