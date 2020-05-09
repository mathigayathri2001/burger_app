//Get access to the mysql npm packages
const mysql = require("mysql2");
let connection;

// Set the values for the connection to the database
// Use the JawsDb if it's deployed, otherwise use local connections settings
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
       host: 'localhost',
        user: 'root',
        password: 'Gay141981$',
        database: 'burger_db'
  });
}

// Make a connection
connection.connect();

// Export the connection as a promise
module.exports = connection.promise();
