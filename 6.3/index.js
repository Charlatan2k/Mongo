require("dotenv").config();
const mongoose = require("mongoose");
const { marks, teacher } = require("./scheme");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: false,
  useUnifiedTopology: false,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connection to database successful");
});

// const teacher1 = new teacher({
//   teacher_first_name: "Henry",
//   teacher_last_name: "Lee",
// });

// const teacher2 = new teacher({
//   teacher_first_name: "Ethan",
//   teacher_last_name: "Brown",
// });

// const mark1 = new marks({
//   _id: new mongoose.Types.ObjectId(),
//   date: new Date(),
//   mark: 6,
//   student_first_name: "Samuel",
//   student_last_name: "Turner",
//   group_name: "A",
//   subject_name: "Math",
//   teachers: [teacher1, teacher2],
// });

// teacher1.save().then((teacher1) => {
//   console.log(teacher1);
//   teacher2.save().then((teacher2) => {
//     console.log(teacher2);
//   });
// });

// mark1.save().then((mark1) => {
//   console.log(mark1);
//   mongoose.disconnect();
// });

// Reto 1

// Calcular la nota media de los alumnos de una asignatura concreta.

// marks
//   .aggregate([
//     {
//       $match: { subject_name: "History" },
//     },
//     {
//       $group: {
//         _id: null,
//         averageMark: { $avg: "$mark" },
//       },
//     },
//   ])
//   .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Calcular el número total de alumnos que hay en el bootcamp incluyendo repetidos.

// marks
//   .aggregate([
//     {
//       $group: {
//         _id: null,
//         totalStudents: { $sum: 1 },
//       },
//     },
//   ])
//   .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos.

// marks
//   .aggregate([
//     {
//       $project: {
//         _id: 0,
//         fullName: {
//           $concat: ["$student_first_name", " ", "$student_last_name"],
//         },
//       },
//     },
//     {
//       $group: {
//         _id: "$fullName",
//       },
//     },
//   ])
//   .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Listar el nombre y los apellidos de todos los profesores incluyendo repetidos.

// teacher
//   .aggregate([
//     {
//       $project: {
//         _id: 0,
//         fullName: {
//           $concat: ["$teacher_first_name", " ", "$teacher_last_name"],
//         },
//       },
//     },
//     {
//       $group: {
//         _id: "$fullName",
//       },
//     },
//   ])
//   .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto.

// marks
//   .aggregate([
//     {
//       $group: {
//         _id: "$group_name",
//         totalStudents: { $sum: 1 },
//       },
//     },
//     {
//       $sort: {
//         _id: -1,
//       },
//     },
//   ])
//   .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Obtén el top 5 de los nombres de las asignaturas cuya nota media sea mayor que 5.

// marks
//   .aggregate([
//     {
//       $group: {
//         _id: "$subject_name",
//         averageMark: { $avg: "$mark" },
//       },
//     },
//     {
//       $match: {
//         averageMark: { $gt: 5 },
//       },
//     },
//     {
//       $sort: {
//         averageMark: -1,
//       },
//     },
//     {
//       $limit: 5,
//     },
//   ])
//   .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Calcular el numero de profesores que hay por cada asignatura incluyendo repetidos.

// marks
//   .aggregate([
//     {
//       $unwind: "$teachers",
//     },
//     {
//       $group: {
//         _id: "$subject_name",
//         totalTeachers: { $sum: 1 },
//       },
//     },
//   ])
//   .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Reto 2

// Obtén el nombre, apellido y la nota de los alumnos que tengan una nota mayor de 8 o la nota tenga fecha del año pasado o anterior.

// marks
//   .aggregate([
//     {
//       $match: {
//         $or: [
//           {
//             mark: { $gt: 8 },
//           },
//           {
//             date: {
//               $lt: new Date("2022-01-01"),
//             },
//           },
//         ],
//       },
//     },
//     {
//       $project: {
//         _id: 0,
//         fullName: {
//           $concat: ["$student_first_name", " ", "$student_last_name"],
//         },
//         mark: 1,
//       },
//     },
//   ])
//   .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Obtén la media de las notas que se han dado en el último año por asignatura.

// marks
//   .aggregate([
//     {
//       $match: {
//         date: {
//           $gt: new Date("2022-01-01"),
//         },
//       },
//     },
//     {
//       $group: {
//         _id: "$subject_name",
//         averageMark: { $avg: "$mark" },
//       },
//     },
//   ])
//   .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Obtén la media aritmética de las notas que se han dado en el último año por nombre de alumno.

// marks
//   .aggregate([
//     {
//       $match: {
//         date: {
//           $gt: new Date("2022-01-01"),
//         },
//       },
//     },
//     {
//       $group: {
//         _id: {
//           student_first_name: "$student_first_name",
//           student_last_name: "$student_last_name",
//         },
//         averageMark: { $avg: "$mark" },
//       },
//     },
//   ])
//   .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Obtén los nombres de los alumnos y la cantidad total de asignaturas por alumno cuyo profesor sea uno que elijáis.

// marks
//   .aggregate([
//     {
//       $match: {
//         "teachers.teacher_first_name": "Henry",
//       },
//     },
//     {
//       $group: {
//         _id: {
//           student_first_name: "$student_first_name",
//           student_last_name: "$student_last_name",
//         },
//         totalSubjects: { $sum: 1 },
//       },
//     },
//   ])
//   .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.log(err);
//   });
