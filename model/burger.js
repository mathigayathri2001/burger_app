const orm = require("../config/orm.js");

class Burger {
    constructor({ burger_name, devored = false }) {
      this.burger_name = burger_name;
      this.devored = devored;
    }

     static async findAll() {
        let rows = await orm.selectAll(`burgers`)
        console.log(rows)
        return rows
        
      }
   




}

module.exports = Burger;