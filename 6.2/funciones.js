const { Photo } = require("./scheme");

function checkRespuesta(err, res) {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log("Método realizado correctamente");
    console.log(res);
    mongoose.disconnect();
  }
}

function uploadPhoto(req, res) {
  const { username, url, title, description } = req.body;
  const photo = new Photo({
    username,
    url,
    title,
    description,
  });
  res.send(photo);
}

function getPhotos(req, res) {
  const { username } = req.params;
  Photo.find({ username }, (err, photos) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(photos);
    }
  });
  res.send(photo);
}

function modifyPhoto(req, res) {
  const { title, description } = req.body;
  Photo.findOneAndUpdate(
    { title, description },
    { description: "Nueva descripción" },
    { new: true },
    (err, photo) => {
      if (err) {
        res.status(500).send(err);
      } else if (!photo) {
        res.status(404).send({ message: "Photo not found" });
      } else {
        res.send(photo);
      }
    }
  );
}

function deleteBook(req, res) {
  const { username, title } = req.params;
  Photo.findOneAndDelete({ username, title }, (err, photo) => {
    if (err) {
      res.status(500).send(err);
    } else if (!photo) {
      res.status(404).send({ message: "Photo not found" });
    } else {
      res.send(photo);
    }
  });
}

function deleteAllBooks(req, res) {
  const { username } = req.params;
  Photo.deleteMany({ username }, (err, photo) => {
    if (err) {
      res.status(500).send(err);
    } else if (!photo) {
      res.status(404).send({ message: "Photo not found" });
    } else {
      res.send(photo);
    }
  });

  module.exports = {
    uploadPhoto,
    getPhotos,
    modifyPhoto,
    deleteBook,
    deleteAllBooks,
  };
}
