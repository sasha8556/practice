class PeopleServices {
  getPeople() {
    return new Promise((resolve, reject) => {
      resolve({ name: "Natasha", age: 40 });
    });
  }
  createPeople() {
    return new Promise((resolve, reject) => {
      resolve({ name: "Katia" });
    });
  }
  editUser(){
    return new Promise((resolve,reject)=>{
      resolve({name:"Abrakadabra"})
    })
  }
  deleteUser(id){
    return new Promise((resolve, reject) => {
      const id = people.findIndex((user) => user.id === id);
      people.splice(id, 1)
      resolve()
    })
  }
}

module.exports = new PeopleServices();
