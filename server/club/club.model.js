const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const clubSchema = new mongoose.Schema({
  name: String,
  description: String,
  abbreviation: String,
  date_created: Date,
  date_modified: Date,
  users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

clubSchema.plugin(mongoosePaginate);

const Club = mongoose.model('Club', clubSchema);
module.exports = Club;
