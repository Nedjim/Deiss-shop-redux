var mongoose        = require('mongoose');

var UserSchema = new mongoose.Schema({
    pseudo : {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true, 
        required: true,
    },
    password: {
        type: String,
        required: true
    },
});

UserSchema.statics.authenticate =  (pseudo, password, callback) => {
    User.findOne({pseudo: pseudo, password:password})
        .exec((error, user) => {
            if(err) {
                return callback(err);
            }
            else if (!user) {
                var err = new Error('User not found');
                err.status = 401;
                return callback(err); 
            }
            return callback(null, user);
       })
}
var User = mongoose.model('User', UserSchema);
module.exports = User;