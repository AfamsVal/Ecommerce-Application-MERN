import jwt from "jsonwebtoken";
import User from "../Models/UserModel.js";
import asyncHandler from "express-async-handler";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = await User.findById(decode.id).select("-password");
      next();
    } catch (error) {
      //unAuthorized
      res.status(401);
      throw new Error("Not Authorized, token not found....");
    }
  }

  if (!token) {
    //unAuthorized
    res.status(401);
    throw new Error("Not Authorized, token not found");
  }
});

export { protect };
