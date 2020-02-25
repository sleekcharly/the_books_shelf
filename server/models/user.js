// import required packages for the user model
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('./../config/config').get(process.env.NODE_ENV);
const SALT = 10;

// create the user schema
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    name: {
        type: String,
        maxlength: 100
    },
    lastname: {
        type: String,
        maxlength: 100
    },
    role: {
        type: Number,
        default: 0
    },
    token: {
        type: String
    }
});


// user schema middleware for hashing passwords before san=ving to Mongo
userSchema.pre('save', function(next){
    var user = this;

    if(user.isModified('password')){
        bcrypt.genSalt(SALT, function(err, salt){
            if(err) return next(err);

            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err);
                user.password = hash;
                next();
            })
        })
    } else {
        next();
    }
})


// user schema method  for comparing passwords
userSchema.methods.comparePassword = function(candidatePassword, cb){
    var user = this;
    bcrypt.compare(candidatePassword, user.password, function(err, isMatch){
        if(err) return cb(err);
        cb(null, isMatch);
    });
};

// user schema method for generating login token
userSchema.methods.generateToken = function(cb){
    var user = this;
    var token = jwt.sign(user._id.toHexString(), config.SECRET);

    user.token = token;
    user.save(function(err, user){
        if(err) return cb(err);
        cb(null, user);
    })
}

// token verification
userSchema.statics.findByToken = function(token,cb){
    var user = this;

    jwt.verify(token, config.SECRET, function(err,decode){
        user.findOne({"_id": decode, "token": token},function(err,user){
            if(err) return cb(err);
            cb(null,user);
        })
    })
}


// user schema method for user logout
userSchema.methods.deleteToken = function(token, cb){
    var user = this;

    user.updateOne({$unset: {token: 1}}, function(err, user) {
        if(err) return cb(err);
        cb(null, user);
    });
};

const User = mongoose.model('User', userSchema);
module.exports = { User }
