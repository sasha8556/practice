const fs = require("fs");

class PeopleServices {
  getPeople() {
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
