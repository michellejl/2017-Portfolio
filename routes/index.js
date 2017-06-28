const express = require('express'),
      router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Welcome' });
});

/* GET Social Feed Page */
router.get('/feed', ((req, res) => {
  res.render('feed', {title: 'Social Feed'})
}));

/* GET Portfolio Page */
router.get('/portfolio', ((req, res) => {
  res.render('portfolio', {title: 'Portfolio'})
}));

/* GET Resume Page */
router.get('/resume', ((req, res) => {
  res.render('resume', {title: 'Resume'})
}))

module.exports = router;

