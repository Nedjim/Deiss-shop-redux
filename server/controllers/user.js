const mongoose      = require('mongoose');
const User          = require('../models/user');

const findUser = (req, res) => {
    User.find((err, users)=> {
        if(err){
          res.send(err);
        }
        res.send(users);
      })
}

const addUser = (req, res) => {
    var user = new User();
    user.pseudo = req.body.pseudo;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save((err) => {
      if(err){
        res.send(err);
      }
      req.session.userId = user._id; 
      return res.redirect('/profile'); 
    })
}

const searchUser = (req, res) => {
    User.findOne({ _id: req.params.user_id }, (err, user) => {
          if(err){
            res.send(err);
          }
          res.send(user); 
        })
}

const updateUser = (req, res) => {
    User.findOne({ _id: req.params.user_id}, (err, user) => {

          user.pseudo = req.body.pseudo;
          user.email = req.body.email;
          user.password = req.body.password;

          user.save(err => {
              if(err) {
                res.send(err);
              }
              res.send({ message: 'Book updated'})
          })
        })
}

const deleteUser = (req, res) => {
    User.remove({ _id : req.params.user_id}, err => {
          if(err){
            res.send(err);
          }
          res.send({message: 'User deleted'});
        })
}


module.exports = {findUser, addUser, searchUser, updateUser, deleteUser};