const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const path = require("path");
const cors = require("cors");
const db = require("./config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, "/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.get("/products", (req, res) => {
  console.log("/products");
  db.query("select * from shopTable", (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

app.get("/search", (req, res) => {
  let searchTerm = req.query.term;
  let query = `SELECT * FROM shopTable 
WHERE productName LIKE '%${searchTerm}%' 
OR brandNameKor LIKE '%${searchTerm}%' 
OR brandNameEng LIKE '%${searchTerm}%'`;
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "로그인 처리 중 문제가 발생했습니다." });
    } else {
      if (result.length > 0) {
        const user = result[0];

        const isMatch = bcrypt.compareSync(password, user.password);
        if (isMatch) {
          const token = jwt.sign({ userId: user.id }, "your-secret-key", {
            expiresIn: "1h",
          });

          res.json({ message: "로그인 성공", userId: user.id, token: token });
        } else {
          res
            .status(401)
            .json({ message: "이메일 또는 비밀번호가 잘못되었습니다." });
        }
      } else {
        res
          .status(404)
          .json({ message: "이메일 또는 비밀번호가 잘못되었습니다." });
      }
    }
  });
});

app.post("/join", (req, res) => {
  const { email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
  db.query(sql, [email, hashedPassword], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "회원가입 중 문제가 발생했습니다." });
    } else {
      res.json({ message: "회원가입 성공", userId: result.insertId });
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});
