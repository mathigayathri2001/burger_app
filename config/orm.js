const connection = require("./connection.js");

const orm = {
    // This method select all the data from the table
    selectAll: async function (tableName) {
      const sql = 'SELECT * FROM ??'
      const [rows] = await connection.query(sql, [tableName])
      return rows
    },

    insertOne:async function (tableName,colName,colValue) {
        const sql = 'INSERT INTO ?? SET ?? = ?'
        const [rows] = await connection.query(sql, [tableName,colName,colValue])
        return rows
      },
    updateOne:async function (tableName,colName,colValue,id) {
        const sql = 'UPDATE ?? SET ?? = ?,WHERE ??=?'
        const [rows] = await connection.query(sql, [tableName,colName,colValue,id])
        return rows
      },
}

module.exports = orm;