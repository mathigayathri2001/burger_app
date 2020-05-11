/* This script file use import database connection module and develop db functions using orm */
const connection = require("./connection.js");

// orm class contains all the methods to relatated database functions
const orm = {
    // This method select all the records from the burgers table
    selectAll: async function (tableName) {
      const sql = 'SELECT * FROM ??'
      const [rows] = await connection.query(sql, [tableName])
      return rows;
    },
    // This method inserts new burger record into the table burgers
    insertOne:async function (tableName,colName,colValue) {
        const sql = 'INSERT INTO ?? SET ?? = ?'
        const [rows] = await connection.query(sql, [tableName,colName,colValue])
        return rows
      },
    // This method will update bruger record in the burgers table
    updateOne:async function (tableName,colName1,colValue, colName2,id) {
        const sql = 'UPDATE ?? SET ?? = ? WHERE ??=?'
        const [rows] = await connection.query(sql, [tableName,colName1,colValue,colName2,id])
        return rows
      },
    // This method will return the record from the table 
      selectId: async function (tableName, colName, id) {
        const sql = "SELECT * FROM ?? WHERE ?? = ?";   
        const [rows] = await connection.query(sql, [tableName, colName, id]);
         return rows;
        },
    
}

module.exports = orm;