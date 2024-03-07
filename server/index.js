const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const userRoute = require("./routes/userRoute");
const avatarRoute = require("./routes/avatarRoute");

const app = express();
const createWebSocketServer = require("./wss.js");
const port = process.env.PORT || 8000;

mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};
connectDB();
app.use(express.json());
app.use(cookieParser());
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:7000",
  "https://chat-app-one-fawn.vercel.app",
];
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
  credentials: true,
};

app.get("/", (req, res) => {
  res.send("hi");
});

app.use(cors());
app.use("/api/user", userRoute);
app.use("/api/avatar", avatarRoute);

const server = app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});

createWebSocketServer(server);
