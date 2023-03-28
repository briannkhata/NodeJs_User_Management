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

module.exports = {
  homepage,
  addCustomer,
  getCustomers,
};
