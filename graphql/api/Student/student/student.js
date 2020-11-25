import Student from "../../../model/Student"; // Student DB를 쓰기 위해 import함

export default {
  Query: {
    // Qurey 데이터 갖고오는 것 빼고는 전부 다  Mutation 이다.
    getAllStudent: async (_, args) => {
      try {
        const result = await Student.find({}, {});
        // find({},{특별히 조회할 애를 넣는 곳 넣을 것이 있으면 !})

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
    Mutation: {
      createStudent: async (_, args) => {
        try {
          const { name, age, school, gender, regeon } = args;

          const result = await Student.create({
            name,
            age,
            school,
            gender,
            regeon,
          });
          console.log(result);

          return true;
        } catch (e) {
          console.log(e);
          return false;
        }
      },
      deleteStudent: async (_, args) => {
        const { id } = args;

        try {
          const result = await Student.deleteOne({ _id: id });
          console.log(result);

          return true;
        } catch (e) {
          console.log(e);
          return false;
        }
      },
      updateStudent: async (_, args) => {
        const { id } = args;

        try {
          const { age, school, regeon } = args;
          const result = await Student.updateOne(
            { _id: id },
            {
              $set: {
                age,
                school,
                regeon,
              },
            }
          );
          // find({},{특별히 조회할 애를 넣는 곳 넣을 것이 있으면 !})
          console.log(result);
          return true;
        } catch (e) {
          console.log(e);
          return false;
        }
      },
    },
  },
};
