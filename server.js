const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/parcel", 
  {useNewUrlParser: true, useUnifiedTopology: true}
  ).then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("parcel/client/build"));
}

const apiRoutes = require("./routes/shipping");

app.use(apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
