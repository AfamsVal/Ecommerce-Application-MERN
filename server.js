import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path, { dirname } from "path";

import ProductRoute from "./route_api/productRoute.js";
import userRoute from "./route_api/userRoute.js";
import orderRoute from "./route_api/orderRoute.js";
import uploadRoute from "./route_api/uploadRoute.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/products", ProductRoute);
app.use("/api/users/", userRoute);
app.use("/api/order/", orderRoute);
app.use("/api/upload/", uploadRoute);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

//using __dirname is not available in es6 module in nodejs, so we need to resolve it
const __dirname = path.resolve();

//making our upload folder availabe when page loads in browser, we will need to convert it to a static folder
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//Setting our build folder to a static folder so that we can directly access it.
if(process.env.NODE_ENV === "production"){
app.use(express.static(path.join(__dirname,"/client/build")))
app.get('*', (req,res) => res.sendFile(path.resolve(__dirname,"clinet","build","index.html")))
}

//Manage wrong URL
//////////////////////////////
app.use((req, res, next) => {
  const error = new Error(
    `@Danso, can't find Request URL  - http://localhost:5000${req.originalUrl}`
  );
  res.status(404);
  next(error);
});

//Error management in postman
//Only on development and not in production
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((res) => console.log("connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `SERVER IS RUNNING IN ${process.env.NODE_ENV} MODE ON PORT ${PORT}`
  )
);
