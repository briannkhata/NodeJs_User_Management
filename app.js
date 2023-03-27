require('dotenv').config();

const express = require("express");
const expressLayouts = require('express-ejs-layouts')

const app = express();
const port = process.env.PORT || 5000


app.use(express.urlencoded({extended: true }));
app.use(express.json());

//static files
app.use(express.static('public'));

//Templating engine
app.use(expressLayouts);
app.set('layout','./layouts/main');
app.set('view engine','ejs')




//home
app.get('',(req,res) => {
    const locals = {
        title :"Node Js",
        description : "User Management System"
    }
    res.render("index", locals)
});






app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})