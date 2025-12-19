const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const listingsData = require("../init/data");

router.get("/seed", async (req, res) => {
  try {
    const count = await Listing.countDocuments();

    if (count > 0) {
      return res.send("❌ Database already has data. Seeding skipped.");
    }

    await Listing.insertMany(listingsData);
    res.send("✅ Database seeded successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Seeding failed");
  }
});

module.exports = router;
