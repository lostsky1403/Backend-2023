// import mysql
const mysql = require("mysql");

// import dotenv
require("dotenv").config();

// make connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "laravel_rest_api",
});

// connect to database
db.connect(function (err) {
  if (err) {
    console.log(`koneksi error: ${err}`);
    return;
  } else {
    console.log("koneksi berhasil");
    return;
  }
});

// export db
module.exports = db;
