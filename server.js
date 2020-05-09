
const express = require("express");
const exphbs = require("express-handlebars");

// Create an instance of the express app
const app = express();

// This serves the static content
app.use(express.static("public"));

// Handling data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Using the Handlebars template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Route handling
app.use(require("./controller/burger_controller"));

// Setting the port for the deployed version or local instance
const PORT = process.env.PORT || 3000;

// Start the server to listen for client requests
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));