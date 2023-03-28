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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//statuc files
app.use(express.static("public"));

// Templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set('layout', path.join(__dirname, 'views/layouts/main'));

// Mount routes

app.get('/', (req, res) => {
  res.render('index'); // assuming the file is called myfile.ejs and is located in your views folder
});

//app.use("/", customerRoutes);

// Handle 404 errors
app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
