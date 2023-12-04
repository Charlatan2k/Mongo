const { Schema, model } = require("mongoose");

const photoSchema = new Schema({
  username: String,
  url: String,
  title: String,
  description: String,
});

module.exports = model("Photo", photoSchema);
