const User = require("../models/user");

module.exports = async function getDemoOwner() {
  const existingUser = await User.findOne({ username: "demo" });
  if (existingUser) {
    return; 
  }

  const demoUser = new User({ username: "demo", email: "demo@test.com" });
  await User.register(demoUser, "password123");
};
