 const express = require('express');
const Post = require("../models/post");

const Home = (req, res)=>{
Post.find().then(result =>{
          res.render('index', {name: "Chucks Blog", title: "All blog", blog: result})})
}

// take input from form and post it to the server using POST request
const Home_post = (req, res)=>{
       const post = new Post(req.body)
       post.save().then(()=> res.redirect("/blogs"))};

const Detail = (req, res)=>{
       
       const id_blog = req.params.id
       Post.findById(id_blog).then(result => {
       res.render('Details', {name: 'Blog Details', Detail: result})}).catch(err =>  res.status(404).render('404', {name: '404'}));
}

const Create = (req, res)=>{
       res.render('Newblog', {name: 'Create Blog'});
}
const Delete = (req, res)=> {
       const id_blog = req.params.id
       Post.findByIdAndDelete (id_blog).then(result => {
       res.json({redirect: '/blogs'})}).catch(err => {
              res.status(404).render('404', {name: '404'})})
       }

       module.exports = {Home, Home_post, Delete, Detail, Create}