const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const ClubSchema = new mongoose.Schema({
  name: String,
  description: String,
});

ClubSchema.plugin(mongoosePaginate);
const Club = mongoose.model('Club', ClubSchema);

module.exports = Club;
