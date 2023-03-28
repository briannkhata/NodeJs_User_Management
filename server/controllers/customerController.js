const Customer = require("../models/Customer");
const mongoose = require("mongoose");

const homepage = async (req, res) => {
  const locals = {
    title: "Node Js",
    pagetitle: "Dashbaord",
    description: "User Management System",
  };
  res.render("index", locals);
};

const addCustomer = async (req, res) => {
  const locals = {
    title: "Node Js",
    pagetitle: "Add Customer",
    description: "User Management System",
  };
  res.render("customer/add", locals);
};

const getCustomers = async (req, res) => {
  const locals = {
    title: "Node Js",
    pagetitle: "All Customers",
    description: "User Management System",
  };
  res.render("customer/list", locals);
};

const saveCustomer = async (req, res) => {
  console.log(req.body);
  const newCustomer = new Customer({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    details: req.body.details,
  });

  try {
    await Customer.create(newCustomer);
    req.flash('info', 'Customer Created successfully!');
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
  res.render("customer/add");
};

module.exports = {
  homepage,
  addCustomer,
  getCustomers,
  saveCustomer,
};
