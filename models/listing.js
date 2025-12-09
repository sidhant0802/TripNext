const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: String,
    url: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2022/12/17/13/46/woods-7661735_1280.jpg",
      set: (v) =>
        v === ""
          ? "https://cdn.pixabay.com/photo/2022/12/17/13/46/woods-7661735_1280.jpg"
          : v,
    },
  },
  price: Number,
  location: String,
  country: String,
});

module.exports = mongoose.model("Listing", listingSchema); 