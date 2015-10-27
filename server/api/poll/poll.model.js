'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollSchema = new Schema({

  title: {
  	type: String,
    required: true
  },
  author: {
  	type: String,
    required: true
  },
  created_at: String,
  updated_at: String,

  options: {
    type: Object,
    required: true
  },
  votes: Object

});

PollSchema.pre('save', function(next) {

  //update time properties
  var curDate = new Date();
  this.updated_at = curDate;
  if (!this.created_at) {
    this.created_at = curDate;
  }

  next();

});

module.exports = mongoose.model('Poll', PollSchema);