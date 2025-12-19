const User = require("../models/user");

const getDemoOwner = async () => {
  let user = await User.findOne({ username: "sidhant" });

  if (!user) {
    user = new User({
      username: "sidhan",
      email: "sidhantnirupam.com",
    });

    // passport-local-mongoose SAFE method
    await User.register(user, "sidhant08");
  }

  return user._id;
};

module.exports = getDemoOwner;
