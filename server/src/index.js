import app from "./app.js";
// import connectDB from "./db/connectDB.js";

// Load our .env variables
import dotenv from "dotenv";
dotenv.config();

// The environment should set the port
const port = process.env.PORT;

const startServer = async () => {
  try {
    // await connectDB();
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
