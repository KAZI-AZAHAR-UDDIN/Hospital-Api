const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect(
  "mongodb://localhost:27017/krlosave"
);

const db = mongoose.connection;

db.error(
  "error",
  console.error.bind(console, "error in connecting with mongodb")
);

db.once("open", () => {
  console.log("succesfully connecting with mongo db");
});

module.exports = db;
