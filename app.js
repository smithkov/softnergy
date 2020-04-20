var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
// var mongo = require('mongodb');
// var mongoose = require('mongoose');
//
// mongoose.connect('mongodb://smithzard123:2000years%40BC@ds151076.mlab.com:51076/softnergy_db');
// var db = mongoose.connection;

var routes = require('./routes/index');
var favicon = require('serve-favicon');
// Init App
var app = express();

// View Engine
app.use(favicon(path.join(__dirname, '/public/img/', 'fav.png')))
//app.use(express.favicon(__dirname + '/public/images/fav.png'));
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
// app.use(session({
//     secret: 'secret',
//     saveUninitialized: true,
//     resave: true
// }));

// // Passport init
// app.use(passport.initialize());
// app.use(passport.session());

// Express Validator
// app.use(expressValidator({
//   errorFormatter: function(param, msg, value) {
//       var namespace = param.split('.')
//       , root    = namespace.shift()
//       , formParam = root;
//
//     while(namespace.length) {
//       formParam += '[' + namespace.shift() + ']';
//     }
//     return {
//       param : formParam,
//       msg   : msg,
//       value : value
//     };
//   }
// }));

// // Connect Flash
// app.use(flash());

// // Global Vars
// app.use(function (req, res, next) {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   res.locals.error = req.flash('error');
//   res.locals.user = req.user || null;
//   next();
// });



app.use('/', routes);
// app.use('/user', users);
// app.use('/study-area', studyArea);
// app.use('/course', course);
// app.use('/institution-type', institutionType);
// app.use('/institution', institution);
// app.use('/degree-type', degreeType);
// app.use('/city', city);
// app.use('/application', application);

// Set Port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});
