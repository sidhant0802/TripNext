const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");   // << changed path (../)
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("../utils/wrapAsync.js");   // << changed path
const ExpressError = require("../utils/ExpressError.js");  // << changed path
const { listingSchema } = require("../schema.js");  // << changed path

// Use MongoDB Atlas instead of local MongoDB for Vercel
// (Same environment variable also works for Docker)
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

app.get("/", (req, res) => {
    res.redirect("/listings");
});

app.set("view engine", "ejs");

// Vercel requires absolute path that moves up one folder
app.set("views", path.join(__dirname, "..", "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

// Vercel static folder path fix
app.use(express.static(path.join(__dirname, "..", "public")));

// Index Route
app.get("/listings", wrapAsync(async (req, res) => {
    // await Listing.find({})/then((res)=>{
    //     console.log(res);
    // });
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

    // Ensure image object exists
    if (!listing.image) listing.image = {};

    // Create a new Listing
    const newListing = new Listing(listing);
    
    // Save to DB
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

// Catch-all for unmatched routes
// app.all("*", (req, res, next) => {
//     next(new ExpressError(404, "Page Not Found!"));
// });

// Centralized error handler middleware
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("error.ejs", { message });

    // res.status(statusCode).send(message);
});

// DOCKER NEEDS THIS — so the server actually starts
// ❗ NOT USED IN VERCEL → Vercel handles the server
// const port = process.env.PORT || 8080;
// app.listen(port, () => {
//     console.log(`server is listening on port ${port}`);
// });

// VERCEL NEEDS THIS — export the server instead of listening
module.exports = app;
