const fs = require("fs");

class MessageServices {
  getMessage() {
    return new Promise((resolve, reject) => {
      fs.readFile("data.json", "utf8", function (error, data) {
        if (error) {
          reject(error);
        } else {
          const obj = JSON.parse(data);
          const newObj = obj.filter((item) => item.message);
          resolve(newObj);
        }
      });
    });
  }
  createMessage(newMessage) {
    return new Promise((resolve, reject) => {
      let data = fs.readFile("data.json", "utf8", function (error, data) {
        console.log(data);
        if (error) {
          reject(error);
        } else {
          const obj = JSON.parse(data);
          console.log(obj);
          obj.push(newMessage);
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
  editMessage(id, messageData) {
    return new Promise((resolve, reject) => {
      fs.readFile("data.json", "utf8", (error, data) => {
        if (error) {
          reject(error);
        } else {
          const obj = JSON.parse(data);
          const index = obj.findIndex((message) => message.id === id);
          if (index === -1) {
            reject("Индекс не найден");
          } else {
            const updatedMessage = { ...obj[index], ...messageData };
            obj[index] = updatedMessage;

            fs.writeFile(
              "data.json",
              JSON.stringify(obj, null, 3),
              "utf8",
              (error) => {
                if (error) {
                  reject(error);
                } else {
                  resolve(updatedMessage);
                }
              }
            );
          }
        }
      });
    });
  }

  deleteMessage(id) {
    return new Promise((resolve, reject) => {
      fs.readFile("data.json", "utf8", (error, data) => {
        if (error) {
          reject(error);
        } else {
          const obj = JSON.parse(data);
          const index = obj.findIndex((message) => message.id === id);
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
module.exports = new MessageServices();
