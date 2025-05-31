// const mongoose = require("mongoose");

// const userSchema = mongoose.Schema(
//     {
//         username: {
//             type: String,
//             required: [true, "Please add the user name"],
//         },
//         email: {
//             type: String,
//             required: [true, "Please add the user email address"],
//         },
//         password: {
//             type: String,
//             required: [true, "Please add the user password"],
// },

//     },
//     {
//         timestamps: true, // Fix here
//     }
// );

// module.exports = mongoose.model("User", userSchema);


const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
