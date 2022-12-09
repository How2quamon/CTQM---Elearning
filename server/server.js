const express = require ('express')
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
const mysql = require("mysql");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_database',
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get', (req, res) =>{

    const sqlSelect = "SELECT * FROM courses"
    db.query(sqlSelect, (err, result) => {
        console.log(result);
    })
})
app.post("/api/insert", (req, res) => {

    const name = req.body.name;


    const sqlInsert = "INSERT INTO courses (name) VALUE (?)"
    db.query(sqlInsert, [name], (err, result) => {
        console.log(result);
    })
});

app.listen(8080, () => {console.log("Server started on port 8080")} )