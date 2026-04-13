const sanitizeHtml = require("sanitize-html");

const sanitizeInput = (input) => {
  return sanitizeHtml(input, {
    allowedTags: [],
    allowedAttributes: {},
  });
};

const sanitizePostContent = (input, whitelist) => {
  return sanitizeHtml(input, whitelist);
};

module.exports = { sanitizeInput, sanitizePostContent };