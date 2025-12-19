if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// mongoose.set("strictQuery", true);

const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");

// Sessions & auth
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

// Routes
const listingRouter = require("./routes/listing");
const reviewRouter = require("./routes/review");
const userRouter = require("./routes/user");
const seedRouter = require("./routes/seed"); // ⚠️ TEMP

const getDemoOwner = require("./utils/getDemoOwner");

/* =========================
   APP CONFIG
========================= */
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

/* =========================
   DATABASE (SERVERLESS SAFE)
========================= */
const dbUrl = process.env.MONGO_URI;

let isConnected = false;

async function connectDB() {
  if (isConnected) return;

  await mongoose.connect(dbUrl, {
    serverSelectionTimeoutMS: 10000,
  });

  isConnected = true;
  console.log("✅ MongoDB connected");

  await getDemoOwner();
}

// 🔥 GUARANTEE DB BEFORE ANY REQUEST
app.use(async (req, res, next) => {
  try {
    if (!isConnected) {
      await connectDB();
    }
    next();
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    res.status(500).send("Database connection failed");
  }
});

/* =========================
   SESSION CONFIG
========================= */
const sessionSecret = process.env.SECRET || "tripnext_dev_fallback";

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: { secret: sessionSecret },
  touchAfter: 24 * 3600,
});

store.on("error", (err) => {
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

/* =========================
   PASSPORT CONFIG
========================= */
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/* =========================
   GLOBAL VARIABLES
========================= */
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user || null;
  next();
});

/* =========================
   ROUTES
========================= */
app.get("/", (req, res) => {
  res.redirect("/listings");
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

// ⚠️ TEMP: remove after seeding
app.use("/admin", seedRouter);

/* =========================
   ERROR HANDLING
========================= */
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).render("listings/error", { message });
});

/* =========================
   EXPORT FOR VERCEL
========================= */
module.exports = app;

/* =========================
   LOCAL DEV ONLY
========================= */
if (process.env.NODE_ENV !== "production") {
  app.listen(8080, () => {
    console.log("🚀 Local server running at http://localhost:8080");
  });
}
