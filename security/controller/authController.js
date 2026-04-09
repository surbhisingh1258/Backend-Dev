const User = require("./models/User");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const { name, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    password: hashedPassword,
  });

  res.json(user);
};

exports.login = async (req, res) => {
  const { name, password } = req.body;

  const user = await User.findOne({ name });

  if (!user) return res.status(400).send("User not found");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).send("Invalid credentials");

  req.session.userId = user._id;

  res.send("Login successful");
};