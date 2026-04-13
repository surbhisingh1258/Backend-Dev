const { sanitizePostContent } = require("../utils/sanitizer");
const whitelist = require("../utils/htmlWhitelist");

exports.createPost = (req, res) => {
  try {
    let { content } = req.body;

    content = sanitizePostContent(content, whitelist);

    res.status(201).json({ message: "Post created", content });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};