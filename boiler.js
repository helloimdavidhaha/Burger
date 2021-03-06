// Express

var express = require("express");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});

// Express methods

app.get('/', (req, res) => { });
app.post('/', (req, res) => { })

// Handlebars

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// MySQL

var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: 'root',
    database: ""
});

con.connect( (err) => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});
