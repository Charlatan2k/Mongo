const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  teacher_first_name: String,
  teacher_last_name: String,
});

const marksSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  date: Date,
  mark: Number,
  student_first_name: String,
  student_last_name: String,
  group_name: String,
  subject_name: String,
  teachers: [teacherSchema],
});

module.exports.marks = mongoose.model("marks", marksSchema);
module.exports.teacher = mongoose.model("teacher", teacherSchema);
