import mysql from 'mysql'

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'shorturl'
});

con.connect(function (err) {
  if (err) {
    console.log('database connection is failed!');
  } else {
    console.log("Connected successfully!");
  }
}); 

export default con;