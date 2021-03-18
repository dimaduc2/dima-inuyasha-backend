const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//tạo 1 Schema Model (giả)
let FriendModel = new Schema(
  {
    name: String,
    species:[String],
    gender: String,
    image: String,
  },
  {collection: 'friend'}
);
FriendModel.index({name:'text', gender:'text', image:'text'})
module.exports = mongoose.model('friend', FriendModel);