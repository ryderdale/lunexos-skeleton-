'use strict';

var express = require('express');
var router = express.Router();


router.get("/", function (req, res) {
    console.log('/ route hit');
    console.log(req.cookies);
    res.sendFile('index.html', {'root': 'static/'})
})

module.exports = router;
