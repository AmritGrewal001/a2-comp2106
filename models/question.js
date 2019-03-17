const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Question = new Schema({
    title: { type: String },
    answer: { type: String  }
});

module.exports = mongoose.model('Question', Question);