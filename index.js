const express = require("express");
const app = express();
const path = require("path");
app.set("views", path.join(__dirname, "views")); // 화면을 보여줄 폴더 지정
app.set("view engine", "ejs"); // html에 자바스크립트 처리하는 방식으로 ejs

app.get("/", function (req, res) {
  res.render("index", { title: "메인", mainTitle: "우리집" });
});
app.get("/login", function (req, res) {
  //res.sendFile(path.join(__dirname, "html/login.html"));
  res.render("login", { title: "로그인", mainTitle: "로그인 해주세요." });
});
app.get("/join", function (req, res) {
  res.render("join", { title: "회원가입", mainTitle: "회원가입해주세요." });
});
app.get("/board", function (req, res) {
  //데이터베이스에서 글을 긁어와서
  res.render("board", {
    title: "게시판",
    mainTitle: "게시판입니다.",
    list: [
      { no: 1, title: "첫번째 글입니다.", writer: "장성호", date: "2023.01.16", hit: 5 },
      { no: 2, title: "두번째 글입니다.", writer: "장동건", date: "2023.01.17", hit: 1000 },
      { no: 3, title: "세번째 글입니다.", writer: "현빈", date: "2023.01.16", hit: 10 },
      { no: 4, title: "네번째 글입니다.", writer: "정형돈", date: "2023.01.13", hit: 5 },
      { no: 5, title: "다섯번째 글입니다.", writer: "아무개", date: "2023.01.16", hit: 5 },
    ],
  });
});
app.listen(3000, function () {
  console.log("3000번 포트에서 서버 대기 중");
});
