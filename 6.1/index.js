require("dotenv").config();
const mongoose = require("mongoose");
const { User, Profile, Credentials } = require("./scheme.js");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: false,
  useUnifiedTopology: false,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connection to database successful");
});

// let userDocument = new User({
//   login: "Aitor_J",
//   password: "Buenas123",
// });

let profileDocument = new Profile({
  name: "Aitor",
  surname: "Jimenez",
  dateOfBirth: "14/12/2004",
  Comments: "Buenas que tal",
  rol: "Magician",
});

// let credentialsDocument = new Credentials({
//   address: "Calle 3",
//   phone: 68212345,
//   email: "aitor@ejemplo.com",
// });

// userDocument
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

profileDocument
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// credentialsDocument
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
