import User from "../models/User.model.js";
import bcrypt from "bcrypt";
import createTokenAndSaveCookie from "../JWT/generateToken.js";

export const signup = async (req, res) => {
  const { fullname, email, password, confirmPassword } = req.body;
  try {
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password do not Matched!" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User Already Exist!" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await new User({
      fullname,
      email,
      password: hashPassword,
    });
    await newUser.save();
    if (newUser) {
      createTokenAndSaveCookie(newUser._id, res);
      res.status(201).json({ message: "User Created Successfully!", newUser });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

// Login Controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);

    if (!user || !isMatch) {
      return res.status(400).json({ error: "Invalid Credentials!" });
    }
    createTokenAndSaveCookie(user._id, res);
    res.status(200).json({
      message: "User Login Successfully!",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

// logout
export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(201).json({ message: "User Logout Successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
};
