var express = require('express');
var router = express.Router();
// var User = require('../models/users');
 var Career = require('../models').Career;
 var Project = require('../models').Project;
 var Contact = require('../models').Contact;
 var multer  =   require('multer');

 var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/resume');
    },
    filename: (req, file, cb) => {

      var filetype = '';
      if(file.mimetype === 'application/msword') {
        filetype = 'doc';
      }
      if(file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        filetype = 'docx';
      }
      // if(file.mimetype === 'image/jpeg') {
      //   filetype = 'jpg';
      // }
      cb(null, req.body.email + '.' + filetype);
    }
});
var upload = multer({storage: storage});
// var Institution = require('../models/institution');
// var StudyArea = require('../models/studyArea');
// var Application = require('../models/application');
// var Course = require('../models/course');

router.post('/career',upload.single('file'),function(req, res, next) {
  console.log(req.file);
  if(!req.file) {
    res.status(500);
    //return next(err);
  }
  var data = {
    name : req.body.name,
    email:req.body.email,
    position:req.body.position,
    path:req.body.email,
    message:req.body.message,
    linkedin:req.body.linkedin
  };

  Career.create(data).then(data=> {
   res.status(200).send({data: data});
 }).catch(err=>{
   if (err) return res.status(500).send(err)

 })
})
router.get('/', function(req, res){

    res.render('index');
});

router.get('/mobile-app-development', function(req, res){

    res.render('mobile');
});

router.get('/web-app-development', function(req, res){

    res.render('web');
});

router.get('/UX-UI', function(req, res){

    res.render('ux');
});

router.get('/contact', function(req, res){

    res.render('contact');
});

router.get('/about', function(req, res){

    res.render('about');
});

router.get('/career', function(req, res){

    res.render('career');
});

router.post('/contact', function(req, res) {
    var data = {
      name : req.body.name,
      email:req.body.email,
      message:req.body.message
    };

    Contact.create(data).then(data=> {
     res.status(200).send({data: data});
   }).catch(err=>{
     if (err) return res.status(500).send(err);
   });
});
router.post('/project',function(req, res, next) {

  var data = {
    name : req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    message:req.body.message
  };

Project.create(data).then(data=> {
 res.status(200).send({data: data});
  }).catch(err=>{
    if (err) return res.status(500).send(err)
  })
});

module.exports = router;
