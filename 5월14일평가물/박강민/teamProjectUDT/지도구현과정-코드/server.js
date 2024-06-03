// // server.js

// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// const app = express();
// const uri =
//   "mongodb+srv://kangmin:Parkyunstar1!@kangmin.3l6hhbv.mongodb.net/?retryWrites=true&w=majority&appName=Kangmin";
// // MongoDB에 연결
// mongoose.connect(uri);

// // MongoDB 스키마 생성
// const markerSchema = new mongoose.Schema({
//   latitude: Number,
//   longitude: Number,
// });

// // MongoDB 모델 생성
// const Marker = mongoose.model("Marker", markerSchema);

// // Express 앱 설정
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // 클라이언트에게 위도와 경도 데이터를 전송
// app.get("/api/markers", (req, res) => {
//   Marker.find({}, (err, markers) => {
//     if (err) {
//       console.error("Error fetching markers:", err);
//       res.status(500).send("Error fetching markers");
//     } else {
//       res.status(200).json(markers);
//     }
//   });
// });

// const port = 5501;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
// server.js

const express = require("express");
const app = express();
const port = 5501;

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다`);
});
