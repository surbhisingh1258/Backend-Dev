const Review = require("./models/Review");
const xss = require("xss");

exports.addReview = async (req, res) => {
  let { comment } = req.body;

  comment = xss(comment);

  const review = await Review.create({
    user_id: req.session.userId,
    comment,
  });

  res.json(review);
};