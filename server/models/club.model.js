const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const clubSchema = new mongoose.Schema({
  name: String,
  description: String,
  users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]

});

clubSchema.plugin(mongoosePaginate);

function updateClub(oldModel, newModel){
  oldModel.name = newModel.name;
  oldModel.description = newModel.description;
  return oldModel;
}

module.exports = {
  schemaModel: mongoose.model('Club', clubSchema),
  schemaUpdate: updateClub
};
