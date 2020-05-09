const mysql = require('mysql2')
 
let defaultConfig;

if (process.env.JAWSDB_URL) {
    defaultConfig = process.env.JAWSDB_URL
}
else {
    defaultConfig = {
        host: 'localhost',
        user: 'root',
        password: 'Gay141981$',
        database: 'burger_db'
    }
}

let connection = mysql.createConnection(defaultConfig)

connection.promise()

module.exports = connection
