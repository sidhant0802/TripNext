const User = require("../models/user");

module.exports = async function getDemoOwner() {
  const demoUsername = "demo_owner";

  const existingUser = await User.findOne({ username: demoUsername });

  if (existingUser) {
    console.log("ℹ️ Demo owner already exists");
    return existingUser;
  }

  const demoUser = new User({
    username: demoUsername,
    email: "demo@tripnext.com",
  });

  const password = "demo1234";

  await User.register(demoUser, password);

  console.log("✅ Demo owner created");
  return demoUser;
};
