const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var User = require('../models/user');

const db = "mongodb://meyssa:meyssa18@ds125272.mlab.com:25272/amortree"
mongoose.Promise = global.Promise;

let database;
mongoose.connect(db,  { useNewUrlParser: true }, function(err){
    if(err){
        console.error("Error! " + err);
    }
        database = db
        console.error("done");
})



router.get('/', function(req, res){
    res.send('api works');
});

router.post('/user', function(req, res){
    console.log('User added');
    var newUser = new User();
    newUser.name = req.body.name;
    newUser.lastname = req.body.lastname;
    newUser.email = req.body.email;
    newUser.save(function(err, insertedUser){
        if(err){
            console.log('Error adding user');
        }else{
            res.json(insertedUser);
        }
    });
});

module.exports = router;