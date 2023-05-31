const express = require("express");
const app = express();
const PORT = 5000; // Konark - Make it a .env variable, nothing but a good practice for security reasons

// DB Connection
const dbConnection = require("./utility/db.js");

// Routes
const routes = require("./routes");

// Middlewares
app.use(express.json()); // Konark - This is a middleware to parse the request body
app.use("/api", routes); // Konark - This is a middleware to handle all the routes
app.set("views", "./views");
app.set("view engine", "html");
app.use(express.static(__dirname + "/views"));
app.get("/", (req, res) => {
  res.render("payment.html");
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
