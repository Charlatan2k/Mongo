const express = require("express");
const cors = require("cors");
const photoRouter = require("./router/profesional.router");
const errorHandler = require("./error/errorhandler");

const app = express();

app.set("port", process.env.PORT || 3200);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(photoRouter);
app.use((req, res, next) => {
  res
    .status(404)
    .json({ error: true, codigo: 404, mensaje: "Endpoint not found" });
});

app.use(errorHandler);

module.exports = app;
