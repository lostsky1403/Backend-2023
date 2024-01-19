// import EmployeeController
const EmployeeController = require("../controllers/EmployeeController");
// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello HRD API Express");
});

// Membuat routing employee
router.get("/Employees", EmployeeController.index);
router.post("/Employees", EmployeeController.store);
router.put("/Employees/:id", EmployeeController.update);
router.delete("/Employees/:id", EmployeeController.destroy);
router.get("/Employees/:id", EmployeeController.show);
router.get('/employees/search/:name', EmployeeController.search);
router.get('/employees/status/:status', EmployeeController.getByStatus);
//search by name

// export router
module.exports = router;
