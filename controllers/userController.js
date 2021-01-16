import asyncHandler from "express-async-handler";
import User from "../Models/UserModel.js";
import UserModel from "../Models/UserModel.js";
import generateToken from "../utils/generateToken.js";

//@DESC auth user & get token
//@ROUTE Post api/users/login
//@ACCESS Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//
//@DESC Get user profile
//@ROUTE GET api/users/profile
//@ACCESS Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User no found!");
  }
});

//
//@DESC Update user profile
//@ROUTE PUT api/users/profile
//@ACCESS Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User no found!");
  }
});

//@DESC Register a new user
//@ROUTE Post api/users/register
//@ACCESS Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exist");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status("400");
    throw new Error("Invalid user token!");
  }
});

//@DESC Fetch all user
//@ROUTE GET api/users
//@ACCESS ADMIN PRIVATE
const adminFetchUser = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

//@DESC Delete user
//@ROUTE DELETE api/users/:id
//@ACCESS ADMIN PRIVATE
const deleteUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (user) {
    await user.remove();
    const users = await User.find({});
    res.json({ users });
  } else {
    res.status(404);
    throw new Error("User not found!");
  }
});

export {
  authUser,
  getUserProfile,
  updateUserProfile,
  registerUser,
  adminFetchUser,
  deleteUser,
};
