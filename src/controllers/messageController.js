const Message = require('../models/Message');


// CREATE
exports.createMessage = async (req, res) => {

  try {

    const message = await Message.create(req.body);

    res.status(201).json(message);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};


// READ ALL
exports.getMessages = async (req, res) => {

  try {

    const messages = await Message.find();

    res.json(messages);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};


// DELETE
exports.deleteMessage = async (req, res) => {

  try {

    await Message.findByIdAndDelete(req.params.id);

    res.json({
      message: 'Message deleted'
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};