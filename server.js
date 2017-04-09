var path              = require('path');
var express           = require('express');
var app               = express();
var PORT              = process.env.PORT || 8080;
var path              = require('path');
var express           = require('express');
var bodyParser        = require('body-parser');
var mongoose          = require('mongoose');

//var cookieParser      = require('cookie-parser');
//var session           = require('express-session');

var configDB          = require('./server/config.js');
var Auth              = require('./server/controllers/auth');

var app               = express();

// using webpack-dev-server and middleware in development environment
if(process.env.NODE_ENV !== 'production') {
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpack = require('webpack');
  var config = require('./webpack.config');
  var compiler = webpack(config);
  
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, 'dist')));

//Connexion à la bdd
mongoose.connect(configDB.dbUrl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Application 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.use(cookieParser());


//Lien HTML
app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.route('/auth')
  .post(Auth.post);

app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});