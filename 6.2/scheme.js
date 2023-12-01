const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  username: String,
  url: String,
  title: String,
  description: String,
});

const teachersSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  groups: [String],
});

const subjectsSchema = new mongoose.Schema({
  title: String,
  teachers: [teachersSchema],
});

const marksSchema = new mongoose.Schema({
  date: Date,
  mark: Number,
  subjects: [subjectsSchema],
});

const studentsSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  marks: [marksSchema],
});

module.exports.Photo = mongoose.model("Photo", photoSchema);
module.exports.Teachers = mongoose.model("Teachers", teachersSchema);
module.exports.Subjects = mongoose.model("Subjects", subjectsSchema);
module.exports.Marks = mongoose.model("Marks", marksSchema);
module.exports.Students = mongoose.model("Students", studentsSchema);
