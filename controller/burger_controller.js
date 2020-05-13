// This script files import express module and route the http request through the 
const express = require("express");

// Get access the class Burger file
const Burger = require("../model/burger");

// Initialize a router variable
const router = express.Router();

// route the root into the main page
router.get("/", async function (req, res) {
  const data = await Burger.findAll();
  res.render("index", { burgers: data });
});

// route the get the /api/burgers request
router.get('/api/burgers', async function (req, res) {
  try {
    const burger = await Burger.findAll()
    res.status(200).json({ data: burger })
  } catch (err) {
    res.status(500).json(err)
  }
})

// route the post api/burgers request
router.post('/api/burgers', async function (req, res) {
  try {
    const addBurger = new Burger(req.body)
    await addBurger.create()
    res.status(201).json(addBurger)
  } catch (err) {
    res.status(500).json(err)
  }
})

// route patch request and process the id parameter along with it
router.put('/api/burgers/:id', async (req, res) => {
  let burger = await Burger.findById(req.params.id)
  console.log(burger)
  if (!burger) return res.status(404).end()
  burger = Object.assign(burger, req.body, { id: req.params.id })

  try {
    await burger.save()
    res.status(200).json(burger)
  } catch (err) {
    res.status(500).json(err)
  }

  
})



module.exports = router;