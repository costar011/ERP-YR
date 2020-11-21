const mongoose = require("mongoose"); // mongoose 를 mongoose에 요청하여 mongoose으로 넣는다.
const dotenv = require("dotenv"); // dotenv 를 dotenv에 요청하여 dotenv으로 넣는다.

const connect = () => {
  if (process.env.NODE_ENV !== `production`) {
    mongoose.set("debug", true); // debug모드로 실행된다.
  }

  // connect() <-- 함수
  mongoose.connect(
    `mongodb://${process.env.DB_ID}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`,
    {
      dbName: process.env.DB_NAME,
      useNewUrlParser: true,
      useCreateIndex: true,
      // `` <-- 첫번째 파라미터 연결 주소 , ${process.env.DB} <-- dotenv 에 있는 DB변수
    },
    (error) => {
      if (error) {
        console.log(error);
        console.log(`❌ FAILED TRY AGAIN`);
      } else {
        console.log(`✅ MONGODB CONNECTION SUCCEES`);
      }
    }
  );
};

mongoose.connection.on(`error`, (error) => {
  console.log(error);
  console.log(`❌ CONNECTION FAILED TRY AGAIN`);
  connect();
});

mongoose.connection.on(`disconnect`, () => {
  console.log(`❌ CONNECTION FAILED TRY AGAIN`);
  connect();
});

module.exports = connect;
