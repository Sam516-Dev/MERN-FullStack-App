import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRounter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGOPASS)
  .then(() => {
    console.log("connected to mongo db ...");
  })
  .catch((err) => {
    console.log(" here is the error from mongoose:", err);
  });

const app = express();
app.use(express.json());

app.use("/api/user", userRounter);
app.use("/api/auth", authRouter);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log("app listening on port 3000 !!");
});
