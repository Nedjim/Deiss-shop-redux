const mongoose      = require('mongoose');
const User          = require('../models/user');

const post = (req, res, next) => {
   if(req.body.pseudo && req.body.password) {
        User.authenticate(req.body.pseudo, req.body.password, (error, user) => {
            if(error || !user) {
                var error = new Error('Wrong email or password')
                error.status = 401;
                return next(error);
            }
            else {
                //req.session.user = user;
                //res.cookie('user', req.session.user)
                if(user.pseudo == 'admin'){
                    return res.redirect('/admin/articles');
                }
                return res.redirect('/');
          }
     })
   }
   else {
    var error = new Error('Email and password are required');
       error.status = 401;
       return next(error);
       
   }
}
module.exports = {post};