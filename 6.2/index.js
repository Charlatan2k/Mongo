require("dotenv").config();
const mongoose = require("mongoose");
const { Photo, Students, Marks, Subjects, Teachers } = require("./scheme");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: false,
  useUnifiedTopology: false,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connection to database successful");
});

// Mostrar las notas de un alumno

// Students.find(
//   { $and: [{ firstName: "Sophia" }, { lastName: "Anderson" }] },
//   { marks: 1, _id: 0 }
// )
//   .then((result) => {
//     for (let nota of result[0].marks) {
//       console.log(nota);
//     }
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Mostrar todas las asignaturas de un alumno

// Students.find({
//   $and: [{ firstName: "Sophia" }, { lastName: "Anderson" }],
// }).then((result) => {
//   console.log(`First student has ${result[0].marks.length} marks`);
//   for (let nota of result[0].marks) {
//     console.log(nota.subjects);
//   }
//   mongoose.disconnect();
// });

// Mostrar todos los profesores de un alumno.

// Students.find(
//   { $and: [{ firstName: "Sophia" }, { lastName: "Anderson" }] },
//   { marks: 1, _id: 0 }
// ).then((result) => {
//   for (let nota of result[0].marks) {
//     for (let subject of nota.subjects) {
//       console.log(subject.teachers);
//     }
//   }
//   mongoose.disconnect();
// });

// Hice esto 4 veces aunque solo aparezca 1 de cada

let teacher1 = new Teachers({
  firstName: "Oliver",
  lastName: "Taylor",
  groups: ["I", "J"],
});

let subject1 = new Subjects({
  title: "Chemistry",
  teachers: [teacher1],
});

let mark1 = new Marks({
  date: new Date(),
  mark: 10,
  subjects: [subject1],
});

let student1 = new Students({
  firstName: "Alicia",
  lastName: "Johnson",
  marks: [mark1],
});

teacher1
  .save()
  .then((teacher) => {
    console.log("Teacher saved");
    console.log(teacher);
  })
  .catch((err) => {
    console.log(err);
  });

subject1
  .save()
  .then((subject) => {
    console.log("Subject saved");
    console.log(subject);
  })
  .catch((err) => {
    console.log(err);
  });

student1
  .save()
  .then((student) => {
    console.log("Student saved");
    console.log(student);
  })
  .catch((err) => {
    console.log(err);
  });

mark1.save().then((mark) => {
  console.log("Mark saved");
  console.log(mark);
});
