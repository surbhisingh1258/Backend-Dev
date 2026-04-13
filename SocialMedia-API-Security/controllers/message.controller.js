const { sanitizeInput } = require("../utils/sanitizer");

exports.sendMessage = (req, res) => {
  let { message } = req.body;

  message = sanitizeInput(message);

  res.json({ message: "Message sent", content: message });
};