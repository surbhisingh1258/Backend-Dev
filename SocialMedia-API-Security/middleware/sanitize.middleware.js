const { sanitizeInput } = require("../utils/sanitizer");

const sanitizeRequest = (req, res, next) => {
  for (let key in req.body) {
    if (typeof req.body[key] === "string") {
      req.body[key] = sanitizeInput(req.body[key]);
    }
  }
  next();
};

module.exports = sanitizeRequest;