if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");
const listingRouter = require("./routes/listing");
const reviewRouter = require("./routes/review");
const userRouter = require("./routes/user");
const seedRouter = require("./routes/seed");

const getDemoOwner = require("./utils/getDemoOwner");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

const dbUrl = process.env.MONGO_URI;

async function connectDB() {
  if (mongoose.connection.readyState === 1) return;

  await mongoose.connect(dbUrl, {
    dbName: "tripnext",
    serverSelectionTimeoutMS: 20000,
    socketTimeoutMS: 45000,
    maxPoolSize: 10,
  });

  console.log("✅ MongoDB connected");
}

connectDB().catch(err => {
  console.error("❌ MongoDB connection error:", err);
});

const sessionSecret = process.env.SECRET || "tripnext_dev_fallback";

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: { secret: sessionSecret },
  touchAfter: 24 * 3600,
});

store.on("error", err => {
  console.error("❌ Mongo session store error:", err);
});

app.set("trust proxy", 1);

app.use(
  session({
    store,
    name: "tripnext.sid",
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
  })
);

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user || null;
  next();
});

app.get("/", (req, res) => {
  res.redirect("/listings");
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

app.use("/admin", seedRouter);


app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).render("listings/error", { message });
});

module.exports = app;
if (process.env.NODE_ENV !== "production") {
  app.listen(8080, () => {
    console.log("🚀 Local server running at http://localhost:8080");
  });
}
