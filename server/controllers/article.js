const mongoose         = require('mongoose');
const Article          = require('../models/article');

const get = (req, res) => {
    Article.find((err, articles)=> {
        if(err){
          res.send(err);
        }
        res.send(articles);
      })
}

const post = (req, res) => {
   var Article = new Article();
    Article.name = req.body.name;
    Article.description = req.body.description;
    Article.prix = req.body.price;
    Article.image = req.body.image;

    Article.save((err) => {
      if(err){
        res.send(err);
      }
      //req.session.ArticleId = Article._id; 
      return res.redirect('/admin/articles'); 
    })
}

module.exports = {get, post};