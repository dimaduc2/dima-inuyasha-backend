const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//tạo 1 Schema Model (giả)
let YokaiModel = new Schema(
  {
    name: String,
    species:[String],
    gender: String,
    image: String,
  },
  {collection: 'yokai'}
);
YokaiModel.index({name:'text', gender:'text', image:'text'})
module.exports = mongoose.model('yokai', YokaiModel);