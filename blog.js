var Maki = require('maki');
var blog = new Maki();

var Passport = require('maki-passport-local');
var passport = new Passport({
  resource: 'Person'
});

blog.use( passport );

var Person = blog.define('Person', {
  attributes: {
    username: { type: String , max: 50 },
    slug: { type: String , max: 50 },
    password: { type: String , masked: true }
  },
  icon: 'user'
});

var Post = blog.define('Post', {
  attributes: {
    title: { type: String , max: 240 , required: true , slug: true },
    content: { type: String , required: true },
    _author: { type: blog.mongoose.SchemaTypes.ObjectId , required: true }
  },
  requires: {
    'Person': {}
  }
});

blog.start();
