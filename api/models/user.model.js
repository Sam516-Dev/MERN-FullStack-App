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
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngkey.com%2Fdetail%2Fu2w7a9u2a9a9q8r5_user-male-icon-head-icon%2F&psig=AOvVaw1XqPlBz5LenJBDJQhUZtO8&ust=1720736713729000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNDK_vfBnYcDFQAAAAAdAAAAABAE",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userShema);

export default User;
