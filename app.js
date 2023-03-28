// require("dotenv").config();

// const express = require("express");
// const path = require("path");
// const connectDB = require("./server/config/db");
// const expressLayouts = require("express-ejs-layouts");
// const ejs = require("ejs");
// const customerRoutes = require("./server/routes/customer");

// const app = express();
// const port = process.env.PORT || 5000;

// // Connect to MongoDB database
// connectDB();

// // Middleware for parsing request body
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

// //Templating engine
// app.use(expressLayouts);
// app.set("layout", "./layouts/main");
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// app.use("/", customerRoutes);

// // Handle 404 errors
// app.use((req, res) => {
//   res.status(404).render("404", { pageTitle: "Page Not Found" });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



require("dotenv").config();

const express = require("express");
const path = require("path");
const connectDB = require("./server/config/db");
const expressLayouts = require("express-ejs-layouts");
const customerRoutes = require("./server/routes/customer");

const app = express();
const port = process.env.PORT || 5000;

//Connect to MongoDB database
connectDB();

// Middleware for parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set('layout', path.join(__dirname, 'views/layouts/main'));

//app.set("layout", "layouts/main");

// Mount routes
app.use("/", customerRoutes);

// Handle 404 errors
app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
