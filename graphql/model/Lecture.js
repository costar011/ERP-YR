import mongoose from "mongoose"; // mongoose를 사용하기 위해 import함

const Schema = mongoose.Schema; // const <--변하지 않는다는 의미  Schema <-- 객체는 대문자로 시작함

const Lecture = new Schema( // Lecture 라는 상수에 스키마를 만듬
  {
    name: {
      type: String,
      required: true,
    },
    teacher: {
      type: String,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
    grade: {
      type: Number,
      required: true,
    },
    pay: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model(`Lecture`, Lecture, `Lecture`);
// (`별칭`, 실제 객체 , `몽고DB안에 있는 진짜 별칭스키마는 뭔데?`)
