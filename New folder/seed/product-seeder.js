var Product =  require('../model/product');

var mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Shopping',{ useNewUrlParser: true });

var products  =[
  new Product({
  imagePath: 'https://s.hswstatic.com/gif/76008099computerpictures.jpg',
  title:'hi',
  discription: 'First',
  price: 100
}),

new Product({
imagePath: 'https://s.hswstatic.com/gif/76008099computerpictures.jpg',
title:'hi',
discription: 'First',
price: 100
}),

new Product({
imagePath: 'https://s.hswstatic.com/gif/76008099computerpictures.jpg',
title:'hi',
discription: 'First',
price: 100
})


];
var done=0;
for (var i=0;i<products.length;i++)
{
  products[i].save(function(err, result) {
    done++;
    if(done  === products.length)
    {
      exit();
    }

  });
}
function exit() {
  product = Product.find();
  console.log(product);
  mongoose.disconnect();
}
