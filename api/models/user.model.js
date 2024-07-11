import mongoose from "mongoose";

const userShema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default:
        "https://www.pngkey.com/png/detail/170-1704872_user-male-icon-head-icon.png",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userShema);

export default User;
