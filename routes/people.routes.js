const express = require("express");
const router = express.Router();
const PeopleControllers = require("../controllers/people.controller");

router.get("/", async (req, res)=>{
  try {
    const people =await PeopleControllers.getPeople();
    res.send(people);
  } catch (error) {
    console.log("Error");
  }
});


router.post("/create",async (req, res)=>{
  try {
    const newUser =await PeopleControllers.createPeople(req.params);
    res.send(newUser);
  } catch (error) {
    console.log("Error");
  }
});


router.put("/edit",async (req, res)=>{
  try {
    const editUser =await PeopleControllers.editUser(req.params);
    res.send(editUser);
  } catch (error) {
    console.log("Error");
  }
});


router.delete("/delete/:id",async (req, res)=>{
  try {
    const id = req.params.id;
    await PeopleControllers.deleteUser(id)
    res.send();
  } catch (error) {
    console.log("Error");
  }
});

module.exports = router;
