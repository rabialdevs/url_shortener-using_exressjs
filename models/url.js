const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  shortUrl: {
    type: String,
    required: true,
    unique: true
  },
  redirectUrl: {
    type: String,
    required: true,
  },
  visitHistory: {
    type:[{timestamp:{type:Number}}]
  }

}, { timestamps: true })

const Url = mongoose.model('users', urlSchema);

module.exports = Url;