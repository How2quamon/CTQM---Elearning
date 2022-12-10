const express = require ('express')
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
const mysql = require("mysql");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ctqm',
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

// TRANG CHỦ
app.get('/homeprime', (req, res) => {
    const sqlSelect = "SELECT * FROM packs_details where price > 0 LIMIT 4";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get('/homefree', (req, res) => {
    const sqlSelect = "SELECT * FROM packs_details where price = 0 LIMIT 4";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

// ViewMore

app.get('/viewmore/prime', (req, res) => {
    const sqlSelect = "SELECT * FROM packs_details where price > 0";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get('/viewmore/free', (req, res) => {
    const sqlSelect = "SELECT * FROM packs_details where price = 0";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

// Đăng nhập

app.get('/log-in', (req, res) => {
    const sqlSelect = "SELECT * FROM users";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

// app.get('/', (req, res) => {
//     const sqlInsert = "INSERT INTO courses (name) VALUE ('Rom la Dun Dun');";
//     db.query(sqlInsert, (err, result) => {
//         res.send("Annhong Dun Dun");
//     });
// });

// app.get('/api/get', (req, res) =>{
//     const sqlSelect = "SELECT * FROM courses"
//     db.query(sqlSelect, (err, result) => {
//         res.send(result);
//     })
// })

// app.post("/api/insert", (req, res) => {

//     const name = req.body.name;
//     const id = req.body.id;
//     const sqlInsert = "INSERT INTO courses (name) VALUE (?)"
//     db.query(sqlInsert, [name], (err, result) => {
//         console.log(result);
//     })
// });

// app.delete("/api/delete/:id", (req, res) => {
//     const name = req.params.id;
//     const sqlDelete = "DELETE From courses where id = ?";
//     db.query(sqlDelete, name, (err, result) => {
//         if(err) console.log(err);
//     });
// })

// app.put("/api/update/:id", (req, res) => {
//     const id = req.params.id;
//     const name = req.body.name;
//     const sqlUpdate = "Update courses set name = ? where id = ?";
//     db.query(sqlUpdate, [name, id], (err, result) => {
//         if(err) console.log(err);
//         else console.log(result);
//     });
// })

app.listen(3001, () => {console.log("Server started on port 3001")} )