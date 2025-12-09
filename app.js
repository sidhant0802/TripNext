const express = require("express");
const app = express();
const mongoose = require("mongoose");

// ✅ Correct paths (app.js is in root folder)
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema } = require("./schema.js");

// ✅ MongoDB URL from environment (Railway, Vercel, Render)
const mongo_url = process.env.MONGO_URL;

async function main() {
    await mongoose.connect(mongo_url);
}
main()
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log(err);
    });

// Redirect home → listings page
app.get("/", (req, res) => {
    res.redirect("/listings");
});

app.set("view engine", "ejs");

// ✅ FIXED PATHS — works on Railway/Vercel/Render
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

// =======================
//        ROUTES
// =======================

// Index Route
app.get("/listings", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}));

// New Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

// Show Route
app.get("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
}));

// Create Route
app.post("/listings", wrapAsync(async (req, res) => {
    const { listing } = req.body;

    if (!listing) {
        throw new ExpressError(400, "Invalid listing data");
    }

    if (!listing.image) listing.image = {};

    const newListing = new Listing(listing);
    await newListing.save();

    res.redirect("/listings");
}));

// Edit Route
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
}));

// Update Route
app.put("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
}));

// DELETE route
app.delete("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}));

// =======================
//        ERROR HANDLER
// =======================
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("error.ejs", { message });
});

// =======================
//  EXPORT FOR HOSTING
// =======================

// ❗ Vercel needs export (no app.listen)
// ❗ Railway & Render need app.listen

if (process.env.RAILWAY_ENVIRONMENT || process.env.PORT) {
    // Railway / Render
    const port = process.env.PORT || 8080;
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
} else {
    // Vercel
    module.exports = app;
}
