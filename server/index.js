const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const userRoute = require("./routes/userRoute");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
const allowedOrigins = ["http://localhost:5173", "http://localhost:7000"];
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204,
  credentials: true, // Allow credentials like cookies
};

app.get("/", (req, res) => {
  res.send("hi");
});

mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

app.use(cors(corsOptions));
app.use("/api/user", userRoute);

app.listen(port, () => {
  connectDB();
});
