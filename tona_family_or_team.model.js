const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//tạo 1 Schema Model (giả)
let TonaFamilyOrTeamModel = new Schema(
  {
    name: String,
    species:[String],
    gender: String,
    love: [String],
    image: String,
  },
  {collection: 'Tona_family_or_Team'}
);
TonaFamilyOrTeamModel.index({name:'text', gender:'text', love:'text', image:'text'})
module.exports = mongoose.model('Tona_family_or_Team', TonaFamilyOrTeamModel);