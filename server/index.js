const bodyParser = require('body-parser');
const cors = require('cors');
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require("mysql");
const SqlString = require("mysql/lib/protocol/SqlString");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password:"password",
  database: "AccountInfoDB", 
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/insert", (req, res) => {
  const UserName = req.body.username
  const PassWord = req.body.password

  const sqlInsert = "INSERT INTO Acc_Info (username, password) VALUES (?, ?)"
  db.query(sqlInsert, [UserName, PassWord], (err, result)=> {
    console.log(result);
  });
  
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});