const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const UserSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    status: String
});

UserSchema.plugin(mongoosePaginate);
const User = mongoose.model('User', UserSchema);

module.exports = User;