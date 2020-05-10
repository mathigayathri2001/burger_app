const orm = require("../config/orm.js");

class Burger {
  constructor({ burger_name, devoured = false }) {
    this.burger_name = burger_name;
    this.devoured = devoured;
  }

  static async findAll() {
    const rows = await orm.selectAll(`burgers`)
    console.log(rows)
    return rows

  }
  static async findById (id) {
    const rows = await orm.selectId(`burgers`,`id`,parseInt(id)) 
    let burger = null
    if (rows.length) {
      burger = new Burger(rows[0])
      burger.id = id
    }
    return burger

  }

  async save() {
    if (this.id) {
      return this.update()
    } else {
      return this.create()
    }
  }

  async create() {
    const result = await orm.insertOne(`burgers`, `burger_name`, this.burger_name, this.devoured)
    this.id = result.insertId
    console.log(result)
    return this
  }
  async update() {
    console.log('coming')
    this.devoured=true 
    const result = await orm.updateOne(`burgers`, `devoured`, true,  `id`,parseInt(this.id))
    return this
  }
}


module.exports = Burger;