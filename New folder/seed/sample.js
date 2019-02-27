var mongoose = require('mongoose');
var connection = mongoose.createConnection('mongodb://localhost:27017/test',{ useNewUrlParser: true });
var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Tank = connection.model('hello', schema);
var small = new Tank({ name:'sakthi',size: 'small' });
small.save(function (err) {
  if (err) return handleError(err);
  console.log("hi");
  exit();
});
console.log("hi1")
function exit() {
  mongoose.disconnect();
}


/*
//var Product =  require('../model/product');
var mongoose  = require('mongoose');
conn = mongoose.createConnection('mongodb://localhost:27017/Shopping',{ useNewUrlParser: true });

var Schema  = mongoose.Schema;
var schema  = new Schema({
  imagePath:{type:String, required: true},
  title:{type:String, required: true},
  discription:{type:String, required: true},
  price :{type:Number, required: true},
});

var Product = conn.model('product', schema);
//var small = new Product({ imagePath:'first',title:'hi',discription:'dis',price:100 });
var small  = new Product({ imagePath: 'htt' ,title:'hi', discription: 'First', price: 100 });

small.save(function (err) {
  if (err) return handleError(err);
  console.log("hi");
  exit();
});
console.log("hi1")
function exit() {
  mongoose.disconnect();
}


*/
