const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const keys = require("./config/keys");

const users = require("./routes/api/users");
const app = express();



//BodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
// const db = process.env.mongoURI;
const isProduction = process.env.NODE_ENV === "production";
const db = isProduction ? process.env.mongoURI : keys.mongoURI;

//Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected Successfully!"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

//Routes
app.use("/api/users", users);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
// process.env.PORT is Heroku's value

app.listen(port, () => console.log(`Server up and running on port ${port}`));
