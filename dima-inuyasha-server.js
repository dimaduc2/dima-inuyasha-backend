// đây là Express - Web Server cho website dima-inuyasha
const express = require('express');		    //phải mượn Express
const inuyashaRoutes = express.Router();	    //tạo Router để nhận tất cả câu hỏi

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');     //phải mượn Mongoose
                                          //tìm và nói chuyện với MongoDB ở địa chỉ của nó

const PORT = 5200;				                //địa chỉ Phòng

app.use(cors());
app.use(bodyParser.json());
app.use('/inuyasha', inuyashaRoutes);		        //bảo Router chỉ nhận câu hỏi bắt đầu ‘/hanhDong

let tona_family_or_teamModel = require('./tona_family_or_team.model');
// let friendModel = require('./friend.model');
let weaponModel = require('./weapon.model');
// let yokaiModel = require('./yokai.model');

// let Model = require('./.model');
// let Model = require('./.model');

mongoose.connect('mongodb+srv://dima:dimaduc@cluster0.so6ek.mongodb.net/dima-inuyasha-db?retryWrites=true&w=majority', { useNewUrlParser: true })
        .catch(error => console.log('không kết nối được với mongoDB: ' + error));
        // nếu không kết nối được thì thông báo lỗi
const connection = mongoose.connection; //  <=> giữa server và DB

// sau đó, mở kết nối để 2 bên nói chuyện
// hiện ra, thông báo là nói chuyện đc rồi
connection.once('open', function() {
  console.log("Đã nói chuyện với MongoDB");
})

// server bắt đầu nghe và đợi câu hỏi ở phòng PORT 5200
app.listen(PORT, function() {		          //chạy Web Server ở địa chỉ phòng này
  console.log("dima-inuyasha-server đang chạy ở phòng Port: " + PORT);
});

inuyashaRoutes.route('/Tona_Family_or_Team').get(function(req, res) {
  console.log('đã nhận câu hỏi Tona_Family_or_Team')
  // res.json('đã nhận câu hỏi Tona_Family_or_Team')
  tona_family_or_teamModel.find({}, function(err, timFamily){
    if (err) {
      console.log(err);
    }
    else {      
      console.log('đã tìm thấy tất cả gia đình và đội: ' + timFamily)
      res.json(timFamily)
    }
  })
})

// inuyashaRoutes.route('/Friend').get(function(req, res) {
//   console.log('đã nhận câu hỏi Friend')
//   // res.json('đã nhận câu hỏi Friend')
//   friendModel.find({}, function(err, timFriend){
//     if (err) {
//       console.log(err);
//     }
//     else {      
//       console.log('đã tìm thấy tất cả vũ khí là: ' + timFriend)
//       res.json(timFriend)
//     }
//   })
// })

inuyashaRoutes.route('/Weapon').get(function(req, res) {
  console.log('đã nhận câu hỏi Weapon')
  // res.json('đã nhận câu hỏi Weapon')
  weaponModel.find({}, function(err, timWeapon){
    if (err) {
      console.log(err);
    }
    else {      
      console.log('đã tìm thấy tất cả vũ khí là: ' + timWeapon)
      res.json(timWeapon)
    }
  })
})

// inuyashaRoutes.route('/Yokai').get(function(req, res) {
//   console.log('đã nhận câu hỏi Yokai')
//   // res.json('đã nhận câu hỏi Yokai')
//   yokaiModel.find({}, function(err, timYokai){
//     if (err) {
//       console.log(err);
//     }
//     else {      
//       console.log('đã tìm thấy tất cả vũ khí là: ' + timYokai)
//       res.json(timYokai)
//     }
//   })
// })





