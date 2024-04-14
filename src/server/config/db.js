var mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "aa638010@@",
  database: "shopDb",
  port: 3306,
});

module.exports = db;
