const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'sake';
const mongoose = require('mongoose');
const SakeTypeScheme = require('../model/SakeType');
var express = require('express');
var router = express.Router();
const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

/* GET users listing. */
router.get('/sake', function(req, res, next) {
  //MongoClient.connect(url, function(err, client) {
  //  assert.equal(null, err);
  //  console.log("Connected correctly to server");

  //  const db = client.db(dbName);

  //  findDocuments(db, function() {
  //    client.close();
  //  });
  //});

  mongoose.connect('mongodb://127.0.0.1:27017/sake', {useNewUrlParser: true});
  var SakeType = mongoose.model('SakeType', SakeTypeScheme);
  SakeType.find({}, function(err, result){
    if (err) throw err;

    res.render('sake', { types: result });
  });
});

module.exports = router;
