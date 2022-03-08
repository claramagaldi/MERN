const express = require("express");
const { default: mongoose } = require("mongoose");
require("../models/employeeModel");
const Employee = mongoose.model("Employee");

// employeeRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /employee.
const employeeRoutes = express.Router();

employeeRoutes.route("/employee").get(function (req, res) {
  Employee.find(function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you get a single record by id
employeeRoutes.route("/employee/:id").get(function (req, res) {
  let myquery = { _id: req.params.id };

  Employee.findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new record.
employeeRoutes.route("/employee/add").post(function (req, res) {
  let employee = new Employee({
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  });
  employee.save(function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you update a record by id.
employeeRoutes.route("/update/:id").post(function (req, res) {
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
});

// This section will help you delete a record
employeeRoutes.route("/:id").delete((req, res) => {
  let myquery = { _id: req.params.id };

  Employee.deleteOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = employeeRoutes;

//mongoose.connection.close();