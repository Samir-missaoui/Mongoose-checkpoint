const mongoose = require("mongoose");

const personschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  occupation: String,
  email: {
    type: String,
    unique: true,
  },
  favoriteFoods: [
    {
      type: String,
    },
  ],
  createdAt: { type: Date, default: new Date() },
});
module.exports = mongoose.model("user", personschema);
