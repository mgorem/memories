import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";

// initialize express app
const app = express();

dotenv.config();

// use express middleware to connect routes to app
// set up starting path for all routes inside posts.js

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;

// connect to database
mongoose
  .connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT} `))
  )
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
