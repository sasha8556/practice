const MessageService = require("../services/message.services");


class MessageControllers {
  async getMessage() {
    let message = await MessageService.getMessage();
    return message;
  }

  async createMessage(text) {
    let newMessage = await MessageService.createMessage(text);
    return newMessage;
  }

  async editMessage(id, messageData) {
    let editMessage = await MessageService.editMessage(id, messageData);
    return editMessage;
  }

  async deleteMessage(id) {
    const updatedMessage = await MessageService.deleteMessage(id);
    return updatedMessage;
  }
}

module.exports = new MessageControllers();