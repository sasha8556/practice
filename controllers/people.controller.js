const PeopleService = require("../services/people.services");

class PeopleControllers {
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


module.exports = new PeopleControllers();
