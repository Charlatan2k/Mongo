require("dotenv").config();
require("../database");
const mongoose = require("mongoose");
const { get } = require("http");
const Photo = require("../model/user");

const hello = (req, res) => {
  res.send("Hello World");
};

const getProfesional = (req, res) => {
  const { firstName, lastName } = req.query;

  if (firstName && lastName) {
    Photo.find({ firstName, lastName })
      .then((profesional) => {
        res.send(profesional);
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    Photo.find().then((profesional) => {
      res.send(profesional);
    });
  }
};

const addProfesional = (req, res) => {
  const newProfessional = new Photo(req.body);

  newProfessional
    .save()
    .then((savedProfessional) => {
      res.send(savedProfessional);
      console.log(savedProfessional);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const updateProfesional = (req, res) => {
  const { firstName } = req.query;
  const update = req.body;

  Photo.findOneAndUpdate({ firstName }, update, { new: true })
    .then((updatedProfessional) => {
      res.send(updatedProfessional);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const deleteProfesional = (req, res) => {
  const { firstName } = req.query;

  Photo.findOneAndDelete({ firstName })
    .then((deletedProfessional) => {
      res.send(deletedProfessional);
    })
    .catch((err) => {
      res.json(err);
    });
};

const photo1 = new Photo({
  firstName: "John",
  lastName: "Doe",
  age: 30,
  weight: 70,
  height: 180,
  isRetired: false,
  nationality: "American",
  oscarsNumber: 0,
  profession: "Actor",
});

// photo1.save().then((photo1) => {
//   console.log(photo1);
//   mongoose.disconnect();
// });

module.exports = {
  getProfesional,
  addProfesional,
  updateProfesional,
  deleteProfesional,
  hello,
};
