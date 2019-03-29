const express = require('express');
const router = express.Router();
const Question = require('../models/question')

router.get('/', (req, res, next) => {
    Question.find().then(questions => {
          res.render('questions', { questions });  
    });
});


//get reqquests to create question
router.get('/create', (req, res, next) => {
   res.render('question-create', {}); 
});

//post requests to create question
router.post('/create', (req, res, next) => {
   const createdQuestion = new Question(req.title);
   createdQuestion.save().then(() => {
      res.redirect('/questions'); 
   });
});


//to handle editing
router.get('/edit/:id', (req, res, next) => {
   Question.findById(req.params.id).then(requestedQuestion => {
       res.render('questions-edit', { question: requestedQuestion });
   });
});

//handle post requests to edit question
router.post('/edit/:id', (req, res, next) => {
  const id = req.params.id;  
  const title = req.title;    
  Question.findByIdAndUpdate(id, title, {new: true}).then(() => {
     res.redirect('/questions'); 
  });
});


//to handle editing
router.get('/delete/:id', (req, res, next) => {
   const id = req.params.id;  
   Question.findByIdAndDelete(id).then(() => {
     res.redirect('/questions'); 
   });
});

module.exports = router;