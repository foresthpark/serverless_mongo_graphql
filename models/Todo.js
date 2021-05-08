const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  body: {
    type: String,
  },
  important: {
    type: Boolean,
    default: false,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
