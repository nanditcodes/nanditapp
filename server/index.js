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
  let UserName = req.body.username
  let PassWord = req.body.password
  console.log(req.body);
  let sqlInsert = "INSERT INTO Acc_Info (username, password) VALUES (?, ?)";
  db.query(sqlInsert, [UserName, PassWord], (err, result)=> {
    if(err){
      console.log('error:', err);
    } else {
      console.log('result:', result);
    }
    console.log(result);
  });
  
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});