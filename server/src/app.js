import express from "express";
import cors from "cors";
import userRouter from "./routes/user.js";

// Create an express server
const app = express();

// Tell express to use the json middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Allow everyone to access our API. In a real application, we would need to restrict this!
app.use(cors());

/****** Attach routes ******/
// We use /api/ at the start of every route
app.use("/api/user", userRouter);

export default app;
