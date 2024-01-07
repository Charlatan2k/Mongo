require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: false,
    useUnifiedTopology: false,
  })
  .then((db) => {
    console.log("Database is connected on " + db.connection.host);
  })
  .catch((err) => {
    console.log(err);
  });
