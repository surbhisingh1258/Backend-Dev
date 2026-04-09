const Product = require("./models/Product");
const mongoSanitize = require("mongo-sanitize");

exports.searchProducts = async (req, res) => {
  let { query } = req.query;

  query = mongoSanitize(query);

  const products = await Product.find({
    productname: { $regex: query, $options: "i" },
  });

  res.json(products);
};