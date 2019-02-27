var mongoose = require('mongoose');
conn = mongoose.createConnection('mongodb://localhost:27017/Shopping',{ useNewUrlParser: true });

var Schema  = mongoose.Schema;


var schema  = new Schema({
  imagePath:{type:String, required: true},
  title:{type:String, required: true},
  discription:{type:String, required: true},
  price :{type:Number, required: true},
});


module.exports = conn.model('Product', schema);
