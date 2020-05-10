const connection = require("./connection.js");

const orm = {
    // This method select all the data from the table
    selectAll: async function (tableName) {
      const sql = 'SELECT * FROM ??'
      const [rows] = await connection.query(sql, [tableName])
      return rows;
    },

    insertOne:async function (tableName,colName,colValue) {
        const sql = 'INSERT INTO ?? SET ?? = ?'
        const [rows] = await connection.query(sql, [tableName,colName,colValue])
        return rows
      },
    updateOne:async function (tableName,colName1,colValue, colName2,id) {
        const sql = 'UPDATE ?? SET ?? = ? WHERE ??=?'
        const [rows] = await connection.query(sql, [tableName,colName1,colValue,colName2,id])
        return rows
      },

      selectId: async function (tableName, colName, id) {
        const sql = "SELECT * FROM ?? WHERE ?? = ?";   
        const [rows] = await connection.query(sql, [tableName, colName, id]);
         return rows;
        },
    
}

module.exports = orm;