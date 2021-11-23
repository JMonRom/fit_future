const { Schema, model } = require('mongoose');

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true, 
  },
})

const Journal = model('Journal', foodSchema);

module.exports = Journal;


