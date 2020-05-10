const express = require("express");

// Get access the class Burger file
const Burger = require("../model/burger");

// Initialize a router variable
const router = express.Router();


router.get("/", async function (req, res) {
  const data = await Burger.findAll();
  res.render("index", { burgers: data });
});
// api route
router.get('/api/burgers', async function (req, res) {
  try {
    const burger = await Burger.findAll()
    res.status(200).json({ data: burger })
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/api/burgers', async function (req, res) {
  try {
    const addBurger = new Burger(req.body)
    await addBurger.create()
    res.status(201).json(addBurger)
  } catch (err) {
    res.status(500).json(err)
  }
})


router.put('/api/burgers/:id', async (req, res) => {

  const id = req.params.id
  const burgerName = req.body.burger_name
  const devoured = req.body.devoured

  let updatedBurger = new Burger({ burgerName: burgerName, isDevoured: devoured, id })
  try {
    await updatedBurger.update()
    res.status(200).json(updatedBurger)

  } catch (err) {
    res.status(500).json(err)
  }
})



module.exports = router;