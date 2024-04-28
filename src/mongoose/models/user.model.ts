import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  uuid: String,
  name: String,
  phone: String,
  email: String,
  password: String,
});

const User = mongoose.model("user", userSchema);

export { User };
