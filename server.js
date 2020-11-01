import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

import ProductModel from "./route_api/productRoute.js"

dotenv.config()

const app = express()

app.use("/api/products", ProductModel)

//Manage wrong URL
//////////////////////////////
app.use((req, res, next) => {
  const error = new Error(
    `@Danso, can't find Request URL  - http://localhost:5000${req.originalUrl}`
  )
  res.status(404)
  next(error)
})

//Error management in postman
//Only on development and not in production
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  })
})

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("connected"))
  .catch((err) => console.log(err))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`SERVER IS LISTENING ON PORT ${PORT}`))
