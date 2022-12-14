const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
const mysql = require("mysql");

// Kết nối CSDL
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ctqm',
    multipleStatements: true
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

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
app.get('/users', (req, res) => {
    const sqlSelect = "SELECT * FROM users";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

// Đăng ký
// app.get('/register', (req, res) =>{
//     const sqlSelect = "SELECT * FROM users";
//     db.query(sqlSelect, (err, result) =>{
//         res.send(result);
//     })
// })

// Đăng kí tài khoản
app.post('/register', (req, res) => {
    // const Id = 9
    const fullName = req.body.fullName
    const userName = req.body.userName
    const password = req.body.password
    const sqlInsert =
        "INSERT INTO users ( user_name, nick_name, password, cash, score) VALUES (?,?,?,'0','0')";
    db.query(sqlInsert, [fullName, userName, password], (err, result) => {
        console.log(result);
    });
})

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
        if (err) console.log(err);
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
// Lấy gói tương ứng của người dùng
app.get('/userPack/:Uid/:Pid', (req, res) => {
    const user_id = req.params.Uid;
    const pack_id = req.params.Pid;
    const sqlSelect = "SELECT * From user_packs where user_id = ? and pack_id = ?";
    db.query(sqlSelect, [user_id, pack_id], (err, result) => {
        res.send(result);
    });
});
// Đăng ký khoá học mới
app.post('/newPack/:Uid/:Pid', (req, res) => {
    const user_id = req.params.Uid
    const pack_id = req.params.Pid;
    const packname = req.body.pack_name;
    const price = req.body.price;
    const sqlInsert = "INSERT INTO user_packs (user_id, pack_id, pack_name, process, at, price) VALUES (?, ?, ?, 1, 0, ?);";
    db.query(sqlInsert, [user_id, pack_id, packname, price], (err, result) => {
        if(err) console.log(err);
        else console.log(result);
    });
});

// Đánh giá
// Lấy đánh giá
app.get('/getRating/:Uid/:Pid', (req, res) => {
    const user_id = req.params.Uid;
    const pack_id = req.params.Pid
    const sqlSelect = "SELECT * From ratings where user_id = ? and pack_id = ?";
    db.query(sqlSelect, [user_id, pack_id], (err, result) => {
        res.send(result);
    });
});
// Thêm
app.post('/newRating/', (req, res) => {
    const user_id = req.body.user_id
    const pack_id = req.body.pack_id;
    const star = req.body.star;
    const sqlInsert = "INSERT INTO ratings (user_id, pack_id, star) VALUES (?, ?, ?);";
    db.query(sqlInsert, [user_id, pack_id, star], (err, result) => {
        if(err) console.log(err);
        else console.log(result);
    });
});

// Bình luận
// Thêm
app.post('/newComment/:id', (req, res) => {
    const pack_id = req.params.id;
    const content = req.body.content;
    const sqlInsert = "INSERT INTO comments (pack_id, user_id, nick_name, content, vote) VALUES (?, '1', 'thejohan', ?, '0' );";
    db.query(sqlInsert, [pack_id, content], (err, result) => {
        if (err) console.log(err);
        else console.log(result);
    });
});
// Xem
app.get('/getCmt/:id', (req, res) => {
    const id = req.params.id;
    const sqlSelect = "SELECT * FROM comments WHERE pack_id = ?";
    db.query(sqlSelect, id, (err, result) => {
        res.send(result)
    })
})
// Xóa
app.delete('/cmtdelete/:id', (req, res) => {
    const id = req.params.id;
    const sqlDelete = "DELETE FROM comments WHERE id = ?";
    db.query(sqlDelete, id, (err, result) => {
        if (err) console.log(err);
        else console.log(result);
    })
})
// Sửa vote
app.put("/updateVote", (req, res) => {
    const id = req.body.id;
    const vote = req.body.vote;
    const sqlUpdate = "UPDATE comments SET vote = ? WHERE id = ?;";
    db.query(sqlUpdate, [vote, id], (err, result) => {
        if (err) console.log(err);
        else console.log(result);
    });
});

// Dữ liệu giảng viên (Instructor)
app.get('/getInstructor/:id', (req, res) => {
    const id = req.params.id;
    const sqlSelect =
        "SELECT * FROM instructors WHERE id = ?;";
    db.query(sqlSelect, id, (err, result) => {
        res.send(result)
    })
})
// Dữ liệu Courses
app.get('/getCourses/:instructor_id', (req, res) => {
    const instructor_id = req.params.instructor_id;
    const sqlSelect =
        " SELECT * FROM packs_details WHERE instructor_id = ?;";
    db.query(sqlSelect, instructor_id, (err, result) => {
        res.send(result)
    })
})
// Đánh giá giảng viên
app.post('/newInsRating/', (req, res) => {
    const user_id = req.body.user_id
    const ins_id = req.body.ins_id;
    const star = req.body.star;
    const sqlInsert = "INSERT INTO instructor_ratings (instructor_id, user_id, star) VALUES (?, ?, ?);";
    db.query(sqlInsert, [ins_id, user_id, star], (err, result) => {
        if(err) console.log(err);
        else console.log(result);
    });
});

// Lấy hồ sơ người dùng
app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    const sqlSelect =
        "SELECT * FROM users WHERE id = ?";
    db.query(sqlSelect, id, (err, result) => {
        res.send(result)
    })
})
// Dữ liệu Courses của người dùng
app.get('/getUserCourses/:id', (req, res) => {
    const user_id = req.params.id;
    const sqlSelect =
        " SELECT * FROM user_packs WHERE user_id = ?;";
    db.query(sqlSelect, user_id, (err, result) => {
        res.send(result)
    })
})
// Kiểm tra người dùng đã mua hay chưa
app.get('/checkPack/:Uid/:Iid', (req, res) => {
    const user_id = req.params.Uid;
    const ins_id = req.params.Iid;
    const sqlSelect1 =
        " SELECT * FROM pack_detail WHERE instructor_id = ?";
    const sqlSelect2 = 
        " SELECT * FROM user_packs WHERE user_id = ?";
    db.query('SELECT * FROM packs_details WHERE instructor_id = ?; SELECT * FROM user_packs WHERE user_id = ?', [ins_id, user_id], (err, result) => {
        if(err) console.log(err);
        else console.log(result);
    })
})
// Lấy đánh giá của người dùng với giảng viên
app.get('/getInsRating/:Uid/:Iid', (req, res) => {
    const user_id = req.params.Uid;
    const ins_id = req.params.Iid
    const sqlSelect = "SELECT * From instructor_ratings where user_id = ? and instructor_id = ?";
    db.query(sqlSelect, [user_id, ins_id], (err, result) => {
        res.send(result);
    });
});

// Sửa
// app.put('/videocourse/6/update/:id', (req, res)=> {
//     const id = req.params.id;
//     const content= req.body.content;
//     const sqlUpdate= "UPDATE comments SET content = ? where id = ? ";
//     db.query(sqlUpdate, [content, id], (err, result)=> {
//         if(err) console.log(err)
//     })
// })


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

app.listen(3001, () => { console.log("Server started on port 3001") })