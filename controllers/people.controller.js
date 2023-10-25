const PeopleService = require("../services/people.services");


class PeopleControllers {
  async getPeople() {
    let people = await PeopleService.getPeople();
    return people;
  }

  async createPeople(user) {
    let newUser = await PeopleService.createPeople(user);
    return newUser;
  }

  async editUser(id, userData) {
    let editUser = await PeopleService.editUser(id, userData);
    return editUser;
  }

  async deleteUser(id) {
    const updatedPeople = await PeopleService.deleteUser(id);
    return updatedPeople;
  }
}

module.exports = new PeopleControllers();
