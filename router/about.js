const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
    res.send("This is about");
});

module.exports = router;