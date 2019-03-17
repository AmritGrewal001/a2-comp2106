const express = require('express');
const router = express.Router();
const Question = require('../models/question')

router.get('/', (req, res, next) => {
    Question.find().then(questions => {
          res.render('questions', { questions });  
    });
});

module.exports = router;