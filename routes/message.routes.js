const express=require("express");
const router=express.Router();
const MessageControllers = require("../controllers/message.controller");

// http://localhost:3001/api-docs/#/default/get_customers

/**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */

router.get("/", async (req, res)=>{
  try {
    const message =await MessageControllers.getMessage();
    res.status(200).send(message);
  } catch (error) {
    console.log("Error");
  }
});

router.post("/create",async (req, res)=>{
  try {
    const newMessage =await MessageControllers.createMessage(req.body);
    res.send(newMessage);
  } catch (error) {
    console.log("Error");
  }
});


router.put("/edit/:id",async (req, res)=>{
  try {
    const id = +req.params.id;
    const editMessage =await MessageControllers.editMessage(id,req.body);
    res.send(editMessage);
  } catch (error) {
    console.log("Error");
  }
});


router.delete("/delete/:id",async (req, res)=>{
  try {
    const id = +req.params.id;
   const updatedMessage= await MessageControllers.deleteMessage(id)
    res.send(updatedMessage);
  } catch (error) {
    console.log("Error");
  }
});

module.exports = router;

