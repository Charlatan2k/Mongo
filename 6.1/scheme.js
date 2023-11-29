const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  login: String,
  password: String,
});

UserSchema.pre("save", function (next) {
  if (this.password.length < 8) {
    console.log("The password is too short. ");
  } else {
    console.log("Please remember the minimum password length is 8 characters.");
    next();
  }
});

const ProfileSchema = new mongoose.Schema({
  name: String,
  surname: String,
  dateOfBirth: String,
  Comments: String,
  rol: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return v === "Admin" || v === "User";
      },
      message: "Role doesn't exist",
    },
  },
});

const CredentialsSchema = new mongoose.Schema({
  address: String,
  phone: Number,
  email: String,
});

module.exports.User = mongoose.model("User", UserSchema);
module.exports.Profile = mongoose.model("Profile", ProfileSchema);
module.exports.Credentials = mongoose.model("Credentials", CredentialsSchema);
