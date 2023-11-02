const express = require("express");
const router = express.Router();
const MessageControllers = require("../controllers/message.controller");

/**
 * @swagger
 * /api/message:
 *   get:
 *     summary: Get a list of message
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: A list of message.
 */

router.get("/", async (req, res) => {
  try {
    const message = await MessageControllers.getMessage();
    res.status(200).send(message);
  } catch (error) {
    console.log("Error");
  }
});

/**
 * @swagger
 * /api/message/create:
 *    post:
 *      summary: Create new message
 *      description: Create new message
 *    parameters:
 *      - name: message
 *        in: body
 *        required: false
 *        schema:
 *          type: object
 *          example: {"id":1,"message":"Hello"}
 *    responses:
 *      '201':
 *        description: Successfully created message
 */

router.post("/create", async (req, res) => {
  try {
    const newMessage = await MessageControllers.createMessage(req.body);
    res.send(newMessage);
  } catch (error) {
    console.log("Error");
  }
});

/**
 * @swagger
 * /api/message/edit/{id}:
 *   put:
 *     summary: Update message
 *     description: Updates message data by their ID.
 *     parameters:
 *       - name: message
 *         in: body
 *         required: false
 *         schema:
 *           type: string
 *           example:  {"id":1,"message":"Hello"}
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer      
 *     responses:
 *       200:
 *          description: Message data updated successfully.
 *       400:
 *         description: Bad request. Please check your input data.
 *       404:
 *         description: Message with the specified ID not found.
 *       500:
 *         description: Internal server error. Please try the request again later.
 */



router.put("/edit/:id", async (req, res) => {
  try {
    const id = +req.params.id;
    const editMessage = await MessageControllers.editMessage(id, req.body);
    res.send(editMessage);
  } catch (error) {
    console.log("Error");
  }
});


/**
 * @swagger
 * /api/message/delete/{id}:
 *   delete:
 *     summary: Delete message
 *     description: Delete message data by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Пользователь успешно удален.
 */


router.delete("/delete/:id", async (req, res) => {
  try {
    const id = +req.params.id;
    const updatedMessage = await MessageControllers.deleteMessage(id);
    res.send(updatedMessage);
  } catch (error) {
    console.log("Error");
  }
});

module.exports = router;
