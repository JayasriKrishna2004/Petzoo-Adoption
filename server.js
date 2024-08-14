// //Server.js

// import express from "express";
// import mongoose from "mongoose";
// import router from "./routes/LoginRoutes.js";

// import cors from "cors";
// const app = express();
// app.use(express.json());
// app.use(cors());


// app.use("/api", router);
// mongoose
//   .connect(
//    "mongodb+srv://Jayasri:krishnsri@cluster0.8yvs0cz.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then(() => console.log("DB connected"))
//   .catch((err) => console.log(err));
// app.listen(3000);
import express from 'express';
import mongoose from 'mongoose';
import loginRouter from './routes/LoginRoutes.js'; // Adjust the path as needed
import paymentRouter from './routes/PaymentRoutes.js'; // Adjust the path as needed
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

// Use routers for different routes
app.use('/api/login', loginRouter);
app.use('/api', paymentRouter);

// Connect to MongoDB
mongoose
  .connect(
    'mongodb+srv://Jayasri:krishnsri@cluster0.8yvs0cz.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => console.log('DB connected'))
  .catch((err) => console.log(err));

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
