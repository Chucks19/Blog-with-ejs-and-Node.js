const exprss = require('express')
const app = exprss()
const morgan = require('morgan')
const ejs = require("ejs")
const mongoose = require('mongoose')
const path = require('path');
const blogsroute = require("./routes/blogsRoutes")
app.set("view engine", "ejs")
const mongoo = "mongodb://0.0.0.0:27017/Blog"
mongoose.connect(mongoo).then(()=> app.listen(3000, ()=> { console.log("I am connected")})).catch((err)=> { console.log(err)})



//middleware & static files
app.use(exprss.static(__dirname + "/public"));
app.use(exprss.urlencoded({extended:true}));



app.get('/about', function(req, res){
       res.render('about', {name: 'About Chucks blog'});
})

app.get('/about_blog', function(req, res){
       res.redirect('about');
})
app.use(blogsroute)
app.use(function(req, res){
       res.status(404).render('404', {name: '404'});
})
