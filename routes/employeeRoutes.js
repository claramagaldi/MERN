const express = require("express");
const employees = require('../controllers/employeeController');

// employeeRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /employee.
const routes = express.Router();

routes.route("/employee").get(employees.list);

// This section will help you get a single record by id
routes.route("/employee/:id").get(employees.read);

// This section will help you create a new record.
routes.route("/employee/add").post(employees.create);

// This section will help you update a record by id.
routes.route("/update/:id").post(employees.update);

// This section will help you delete a record
routes.route("/:id").delete(employees.delete);

module.exports = routes;

//mongoose.connection.close();