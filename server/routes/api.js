const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

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

module.exports = router;