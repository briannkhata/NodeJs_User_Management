require('dotenv').config();

const express = require("express");
const expressLayouts = require('express-ejs-layouts')


const connectDB = require('./server/config/db')

const app = express();
const port = process.env.PORT || 5000

//connect to Database
connectDB();


app.use(express.urlencoded({extended: true }));
app.use(express.json());

//static files
app.use(express.static('public'));

//Templating engine
app.use(expressLayouts);
app.set('layout','./layouts/main');
app.set('view engine','ejs')

const cutomerRoutes = require('./server/routes/cutomer.js')

//Routes
app.use('/',cutomerRoutes);


//Handle 404
app.get('*', (req , res)=>{
   res.status(404).render('404',{pagetitle:"Error"});
})


app.listen(port,()=>{
    console.log(`Application running on port ${port}`)
})