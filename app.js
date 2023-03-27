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
// app.get('',(req,res) => {
//     const locals = {
//         title :"Node Js",
//         pagetitle :"Dashbaord",
//         description : "User Management System"
//     }
//     res.render("index", locals)
// });



//handle 404

app.get('*' , (req , res)=>{

   res.status(404).render('404',{pagetitle:"Error"});

})





app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})