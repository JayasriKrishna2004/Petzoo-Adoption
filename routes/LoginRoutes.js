

//SignUpRoute.js

import express from "express";
import { Logindata } from "../model/Login.js";
const router = express.Router();



router.post("/Login", async (req, res) => {
  try {
    const newdata = new Logindata(req.body);
    await newdata.save();
    res.status(201).json(newdata);
  } catch (error) {
    res.status(400).json({ message: "Error saving signup data", error });
  }
});

export default router;

