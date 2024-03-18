import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRounter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"

dotenv.config();

mongoose
  .connect(process.env.MONGOPASS)
  .then(() => {
    console.log("connected to mongo db ...");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json())


app.use("/api/user", userRounter)
app.use("/api/auth", authRouter)

app.listen(3000, () => {
  console.log("app listening on port 3000 !!");
});
