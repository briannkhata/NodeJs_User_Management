const homepage = async (req, res) => {
  const locals = {
    title: "Node Js",
    pagetitle: "Dashbaord",
    description: "User Management System",
  };
  res.render("index", locals);
};

module.exports = {
  homepage,
};
