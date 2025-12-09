const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mongo_url = process.env.MONGO_URL;   // <<----- IMPORTANT

async function main() {
    await mongoose.connect(mongo_url);
}

main()
.then(() => {
    console.log("Connected to Atlas DB");
})
.catch((err) => {
    console.log("DB connection error:", err);
});

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Sample data inserted successfully!");
    mongoose.disconnect();
};

initDB();
