const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  num: { type: String, required: true },
  pays: { type: String, required: true },
  gov: { type: String, required: true },
  liv: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);
