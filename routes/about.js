var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('about', {
        body: '90PlusWorks /br --It works--'
    });
});

module.exports = router;
