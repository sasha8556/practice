const fs = require("fs");

// class People {
//   constructor(id, name, age, isMan) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.isMan = isMan;
//   }
// }
// const user1 = new People(1, "Sasha", 26, false);
// const user2 = new People(2, "Natasha", 10, false);
// const user3 = new People(3, "Mark", 20, true);
// const user4 = new People(4, "Pasha", 29, true);
// const user5 = new People(5, "Alex", 30, true);

// const people = [user1, user2, user3, user4, user5];

class PeopleServices {
  getPeople() {
    console.log("first");
    return new Promise((resolve, reject) => {
      fs.readFile("data.json", "utf8", function (error, data) {
        if (error) {
          reject(error);
        } else {
          const obj = JSON.parse(data);
          resolve(obj);
        }
      });
    });
  }
  createPeople(newUser) {
    return new Promise((resolve, reject) => {
      let data = fs.readFile("data.json", "utf8", function (error, data) {
        console.log(data);
        if (error) {
          reject(error);
        } else {
          const obj = JSON.parse(data);
          console.log(obj);
          obj.push(newUser);
          console.log(obj);
          fs.writeFile(
            "data.json",
            JSON.stringify(obj, null, 3),
            function (error, data) {
              if (error) {
                reject(error);
              } else {
                resolve(data);
              }
            }
          );
        }
      });
    });
  }
  editUser(id, userData) {
    return new Promise((resolve, reject) => {
      fs.readFile("data.json", "utf8", (error, data) => {
        if (error) {
          reject(error);
        } else {
          const obj = JSON.parse(data);
          const index = obj.findIndex((user) => user.id === id);
          if (index === -1) {
            reject("Индекс не найден");
          } else {
            const updatedUser = { ...obj[index], ...userData };
            obj[index] = updatedUser;

            fs.writeFile(
              "data.json",
              JSON.stringify(obj, null, 3),
              "utf8",
              (error) => {
                if (error) {
                  reject(error);
                } else {
                  resolve(updatedUser);
                }
              }
            );
          }
        }
      });
    });
  }

  deleteUser(id) {
    return new Promise((resolve, reject) => {
      fs.readFile("data.json", "utf8", (error, data) => {
        if (error) {
          reject(error);
        } else {
          const obj = JSON.parse(data);
          const index = obj.findIndex((user) => user.id === id);
          if (index === -1) {
            reject("Индекс не найден");
          } else {
            obj.splice(index, 1);
            fs.writeFile(
              "data.json",
              JSON.stringify(obj, null, 3),
              "utf8",
              (error) => {
                if (error) {
                  reject(error);
                } else {
                  resolve(obj);
                }
              }
            );
          }
        }
      });
    });
  }
}
module.exports = new PeopleServices();
