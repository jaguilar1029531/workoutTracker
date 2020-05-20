// here i am requiring express so that I can go online wit it
const express = require("express");
// here i am requiring mongoose so that I can manage a database, but I might change to MySQL
const mongoose = require("mongoose");
// in the routes folder I have routes to what i will see after npm start
const routes = require("./routes");
// app is how i will call express
const app = express();
// this is the port where we will be operating
const PORT = process.env.PORT || 3001;

// this is middleware, I am not 100% sure how it works, but I know it is required for this type of code
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku) I AM NOT ENTIRELY SURE WHATS GOING ON HERE
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes from my routes folder that is now the variable 'routes'
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/GLOBALINTEGRITY");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
