const mongoose = require("mongoose");
const express = require("express");

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  position: { type: String, required: true },
  department: { type: String, required: true },
  performanceScore: { type: Number, required: true, min: 0, max: 10 },
  createdAt: { type: Date, default: Date.now },
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
