var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SakeType = new Schema({
  _id: Number,
  type: String
});

module.exports = SakeType;
