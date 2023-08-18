const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// MySQL
const connection = mysql.createConnection({
    database    : 'project_laravel_react',
    host        : 'localhost',
    user        : 'root',
    password    : ''    
});

const userTable = {
    fullName : String,
    email : {
        type : String,
        unique : true
    },
    password : String,
    passwordConfirmation: String,
    image: String,
}

connection.connect((err) => {
    if (err) {
        console.log("Kết nối cơ sở dữ liệu không thành công !!!", err);
      } else {
        userTable
      }
});

module.exports = connection;


// API
app.get("/", (req, res) => {
    res.send("Máy chủ đang chạy")
});

app.post("/signup", (req, res) => {
    console.log(req.body);
});

app.listen(PORT, () => (
    console.log("Máy chủ đang chạy ở prot : " + PORT)
));
