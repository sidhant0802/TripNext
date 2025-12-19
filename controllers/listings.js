const Listing = require("../models/listing");
const getDemoOwner = require("../utils/getDemoOwner");


// ================= INDEX =================
module.exports.index = async (req, res) => {
  const allListings = await Listing.find();
  res.render("listings/index.ejs", { allListings });
};

// ================= NEW FORM =================
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

// ================= SHOW =================
module.exports.showListing = async (req, res) => {
  const { id } = req.params;

  const listing = await Listing.findById(id)
    .populate("owner")
    .populate({
      path: "reviews",
      populate: { path: "author" },
    });

  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  res.render("listings/show.ejs", { listing });
};

// ================= CREATE =================
module.exports.createListing = async (req, res) => {
  const newListing = new Listing(req.body.listing);

  // ⭐ ALWAYS OWNER = SIDHANT
  const ownerId = await getDemoOwner();
  newListing.owner = ownerId;

  if (req.file) {
    newListing.image = {
      url: req.file.path,
      filename: req.file.filename,
    };
  }

  // dummy geometry (map removed)
  newListing.geometry = {
    type: "Point",
    coordinates: [0, 0],
  };

  await newListing.save();
  req.flash("success", "New listing created!");
  res.redirect("/listings");
};

// ================= EDIT FORM =================
module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing does not exist!");
    return res.redirect("/listings");
  }

  let imageUrl = "";
  if (listing.image && listing.image.url) {
    imageUrl = listing.image.url.replace(
      "/upload",
      "/upload/w_250,h_160"
    );
  }

  res.render("listings/edit.ejs", { listing, imageUrl });
};

// ================= UPDATE =================
module.exports.updateListing = async (req, res) => {
  const { id } = req.params;

  const updatedListing = await Listing.findByIdAndUpdate(
    id,
    { ...req.body.listing },
    { new: true }
  );

  if (req.file) {
    updatedListing.image = {
      url: req.file.path,
      filename: req.file.filename,
    };
    await updatedListing.save();
  }

  req.flash("success", "Listing updated!");
  res.redirect(`/listings/${id}`);
};

// ================= FILTER (TABS) =================
module.exports.filter = async (req, res) => {
  const { id } = req.params;

  const allListings = await Listing.find({ category: id });

  if (allListings.length === 0) {
    req.flash("error", `No listings found for ${id}!`);
    return res.redirect("/listings");
  }

  res.locals.success = `Listings filtered by ${id}`;
  res.render("listings/index.ejs", { allListings });
};

// ================= SEARCH =================
module.exports.search = async (req, res) => {
  const input = req.query.q?.trim();

  if (!input) {
    req.flash("error", "Please enter a search query!");
    return res.redirect("/listings");
  }

  const allListings = await Listing.find({
    $or: [
      { title: { $regex: input, $options: "i" } },
      { location: { $regex: input, $options: "i" } },
      { country: { $regex: input, $options: "i" } },
      { category: { $regex: input, $options: "i" } },
      { price: Number(input) || -1 },
    ],
  });

  if (allListings.length === 0) {
    req.flash("error", "No listings found!");
    return res.redirect("/listings");
  }

  res.locals.success = "Search results";
  res.render("listings/index.ejs", { allListings });
};

// ================= DELETE =================
module.exports.destroyListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing deleted!");
  res.redirect("/listings");
};

// ================= RESERVE =================
module.exports.reserveListing = async (req, res) => {
  const { id } = req.params;
  req.flash("success", "Reservation details sent!");
  res.redirect(`/listings/${id}`);
};

// ================= PRICE FILTER =================
module.exports.filterByPrice = async (req, res) => {
  let { min, max } = req.query;

  min = Number(min) || 0;
  max = Number(max) || Infinity;

  const allListings = await Listing.find({
    price: { $gte: min, $lte: max }
  });

  if (allListings.length === 0) {
    req.flash("error", "No listings found in this price range!");
    return res.redirect("/listings");
  }

  res.locals.success = `Listings between ₹${min} and ₹${max}`;
  res.render("listings/index.ejs", { allListings });
};
