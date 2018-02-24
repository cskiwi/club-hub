const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const address = new mongoose.Schema({
  street: String,
  number: Number,
  city: String,
  state: String,
  postalCode: Number,
  active: Boolean
});


const userSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  address: [address],
  date_created: Date,
  date_modified: Date
});

userSchema.plugin(mongoosePaginate);
const User = mongoose.model('User', userSchema);

module.exports = User;
