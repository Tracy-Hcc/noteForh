var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "test",
});

connection.connect((err) => {
  // if (err) throw err;
  console.log("数据库连接成功");
});

connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  // if (error) throw error;
  console.log("The solution is: ", results);
});
