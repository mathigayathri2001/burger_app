const express = require("express");

// Get access the class Burger file
const Burger = require("../model/burger");

// Initialize a router variable
const router = express.Router();


router.get("/", async function (req, res) {
    const data = await Burger.findAll();
    res.render("index", { burgers: data });
  });







  module.exports = router;