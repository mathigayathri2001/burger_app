
/* This script file contains functions to execute database SQL define in the orm.js */
const orm = require("../config/orm.js");

// Burger class defined to handle the database transaction
class Burger {
  constructor({ burger_name, devoured = false }) {
    this.burger_name = burger_name;
    this.devoured = devoured;
  }

  // function to retrieve all the records from the burgers table
  static async findAll() {
    const rows = await orm.selectAll(`burgers`)
    console.log(rows)
    return rows

  }

  // function to get the rows from burgers table based on id and return as burger class
  static async findById (id) {
    const rows = await orm.selectId(`burgers`,`id`,parseInt(id)) 
    let burger = null
    if (rows.length) {
      burger = new Burger(rows[0])
      burger.id = id
    }
    return burger

  }

  // function to save the creation and updates on burgers
  async save() {
    if (this.id) {
      return this.update()
    } else {
      return this.create()
    }
  }

  // function to create new burger to serve
  async create() {
    const result = await orm.insertOne(`burgers`, `burger_name`, this.burger_name, this.devoured)
    this.id = result.insertId
    console.log(result)
    return this
  }
  
  // function to update the burger record after the server
  async update() {
    console.log('coming')
    this.devoured=true 
    const result = await orm.updateOne(`burgers`, `devoured`, true,  `id`,parseInt(this.id))
    return this
  }
}

// export the module with the class burger
module.exports = Burger;