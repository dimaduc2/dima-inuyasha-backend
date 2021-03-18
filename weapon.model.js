const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//tạo 1 Schema Model (giả)
let WeaponModel = new Schema(
  {
    name: String,
    owners: [String],
    image: String,
  },
  {collection: 'weapon'}
);
WeaponModel.index({name:'text', image:'text'})
module.exports = mongoose.model('weapon', WeaponModel);