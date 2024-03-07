const { User } = require("../models/User");

const peopleController = async (req, res) => {
  const users = await User.find({ verified: true });
  res.json(users);
};

module.exports = peopleController;
