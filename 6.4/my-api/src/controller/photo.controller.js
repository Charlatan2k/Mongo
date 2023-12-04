require("dotenv").config();
require("../database");
const Photo = require("../model/user");

function getPhotos(req, res) {
  const { username } = req.params;
  Photo.find({ username: username })
    .then((photos) => {
      res.send(photos);
    })
    .catch((err) => {
      res.json(err);
    });
}

function createPhoto(req, res) {
  const { username, url, title, description } = req.body;
  const newPhoto = new Photo({
    username: username,
    url: url,
    title: title,
    description: description,
  });
  newPhoto
    .save()
    .then((photo) => {
      res.send(photo);
    })
    .catch((err) => {
      res.json(err);
    });
}

function updatePhoto(req, res) {
  const { title, description } = req.body;
  Photo.findOneAndUpdate(
    { title: title },
    { description: description },
    { new: true }
  )
    .then((photo) => {
      res.send(photo);
    })
    .catch((err) => {
      res.json(err);
    });
}

function deletePhoto(req, res) {
  const { username, title } = req.body;
  Photo.findOneAndDelete({ username: username, title: title })
    .then((photo) => {
      res.send(photo);
    })
    .catch((err) => {
      res.json(err);
    });
}

function deletePhotos(req, res) {
  const { username } = req.params;
  Photo.deleteMany({ username: username })
    .then((photo) => {
      res.send(photo);
    })
    .catch((err) => {
      res.json(err);
    });
}

module.exports = {
  getPhotos,
  createPhoto,
  updatePhoto,
  deletePhoto,
  deletePhotos,
};
