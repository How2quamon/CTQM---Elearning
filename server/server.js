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

// Khoá học
app.get('/pack/:id', (req, res) => {
    const id = req.params.id;
    const sqlSelect = "SELECT * From packs_details where id = ?";
    db.query(sqlSelect, id, (err, result) => {
        res.send(result);
    });
});

app.get('/syllabi/:id', (req, res) => {
    const id = req.params.id;
    const sqlSelect = "SELECT * From syllabi where pack_id = ?";
    db.query(sqlSelect, id, (err, result) => {
        res.send(result);
    });
});

app.get('/videosItem/:first/:last', (req, res) => {
    const first = req.params.first;
    const last = req.params.last;
    const sqlSelect = "SELECT * FROM video_items WHERE syllabus_id >= ? AND syllabus_id <= ?;";
    db.query(sqlSelect, [first, last], (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
});


app.get('/packInstruct/:id', (req, res) => {
    const id = req.params.id;
    const sqlSelect = "SELECT * From instructors where id = ?";
    db.query(sqlSelect, id, (err, result) => {
        res.send(result);
    });
});

app.get('/instructRating/:id', (req, res) => {
    const id = req.params.id;
    const sqlSelect = "SELECT AVG(star) as avg_star From instructor_ratings where instructor_id = ?";
    db.query(sqlSelect, id, (err, result) => {
        res.send(result);
    });
});

app.get('/packRating/:id', (req, res) => {
    const id = req.params.id;
    const sqlSelect = "SELECT AVG(star) as avg_star From ratings where pack_id = ?";
    db.query(sqlSelect, id, (err, result) => {
        res.send(result);
    });
});

// Thêm
// app.get('/', (req, res) => {
//     const sqlInsert = "INSERT INTO courses (name) VALUE ('Rom la Dun Dun');";
//     db.query(sqlInsert, (err, result) => {
//         res.send("Annhong Dun Dun");
//     });
// });

// Lấy
// app.get('/api/get', (req, res) =>{
//     const sqlSelect = "SELECT * FROM courses"
//     db.query(sqlSelect, (err, result) => {
//         res.send(result);
//     })
// })

// thêm 
// app.post("/api/insert", (req, res) => {
//     const name = req.body.name;
//     const id = req.body.id;
//     const sqlInsert = "INSERT INTO courses (name) VALUE (?)"
//     db.query(sqlInsert, [name], (err, result) => {
//         console.log(result);
//     })
// });

// Xoá
// app.delete("/api/delete/:id", (req, res) => {
//     const name = req.params.id;
//     const sqlDelete = "DELETE From courses where id = ?";
//     db.query(sqlDelete, name, (err, result) => {
//         if(err) console.log(err);
//     });
// })

// Sửa
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