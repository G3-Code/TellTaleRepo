const mongoose = require("mongoose");
const { Schema } = mongoose; //destructuring

const userSchema = new Schema({
  googleId: String
});

module.exports = mongoose.model("users", userSchema); // mapping the table name and schema name
