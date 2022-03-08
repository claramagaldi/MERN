const mongoose = require("mongoose");
require("../models/employeeModel");
const Employee = mongoose.model("Employee");

exports.list = function (req, res) {
  Employee.find(function (err, result) {
    if (err) throw err;
    res.json(result);
  });
};

exports.read = function (req, res) {
  let myquery = { _id: req.params.id };

  Employee.findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
};

exports.create = function (req, res) {
  let employee = new Employee({
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  });
  employee.save(function (err, result) {
    if (err) throw err;
    res.json(result);
  });
}

exports.update = function (req, res) {
  let myquery = { _id: req.params.id };
  let newvalues = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  Employee.updateOne(myquery, newvalues, function (err, result) {
    if (err) throw err;
    console.log("1 document updated");
    res.json(result);
  });
}

exports.delete = function (req, res) {
    let myquery = { _id: req.params.id };
    Employee.deleteOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  }