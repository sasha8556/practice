const PeopleService = require("../services/people.services");

class PeopleControllers {
  // constructor(id, name, age, isMan) {
  //   this.id = id;
  //   this.name = name;
  //   this.age = age;
  //   this.isMan = isMan;
  // }
  async getPeople() {
    let people = await PeopleService.getPeople();
    return people;
  }
  async createPeople() {
    let newUser = await PeopleService.createPeople();
    return newUser;
  }
  async editUser() {
    let editUser = await PeopleService.editUser();
    return editUser;
  }
  async deleteUser(id) {
  await PeopleService.deleteUser(id);
   
  }
}

// const user1 = new PeopleControllers(1, "Sasha", 26, false);

// const people = [user1];
module.exports = new PeopleControllers();
