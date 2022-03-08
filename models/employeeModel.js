const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Name is required."],
  },
  position: String,
  level: String,
});

module.exports = mongoose.model("Employee", employeeSchema);