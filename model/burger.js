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
    this.devoured = fixBool(this.devoured)
    const result = await orm.updateOne(`burgers`, { burger_name: this.burger_name, devoured: this.devoured }, `id`, this.id
    )

    return this
  }
}
function fixBool(prop) {
  if (prop === 'false') prop = false
  else if (prop === '0') prop = false
  else if (prop === 0) prop = false
  else if (prop === null) prop = false
  else if (prop === undefined) prop = false
  else prop = true
  return prop
}

module.exports = Burger;