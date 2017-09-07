var express = require('express');
var router = express.Router();
var num;
/* GET home page. */
router.get('/', function(req, res, next) {
  num = Math.floor(Math.random() * 3)
  res.render('index', { title: 'Monitor' });
});

router.get('/video/:size', function(req, res, next) {
    if(req.params.size = 'large') {
      console.log('this fired for some dumb reason')
      res.sendfile('/Users/dave/personalCode/monitorlandingpage/videos/shortestvideo' + num + '.mov' , function(err) {
      if(err) {
        console.log("error:  " + err);
      }
    });
    } else {
      res.sendfile('/Users/dave/personalCode/monitorlandingpage/videos/staticvideo.mp4' , function(err) {
      if(err) {
        console.log("error:  " + err);
      }
    });
    }

});


module.exports = router;
