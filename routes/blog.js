const express = require('express'),
      router = express.Router();

router.get('/', ((req, res) => {
  res.render('blog', {title: 'Blog'})
}))
  .get('/post/my-experiences-with-women-who-code-portland', ((req, res) => {
    res.render('blog-posts/my-experiences-with-women-who-code-portland', {
      title: 'My Experiences with Women Who Code Portland'
    })
  }))
  .get('/post/everything-i-forgot-about-images', ((req, res) => {
    res.render('blog-posts/everything-i-forgot-about-images', {
      title: 'Everything I Forgot About Images'
    })
  }))
  .get('/post/conference-review-developer-week-2017', ((req, res) => {
    res.render('blog-posts/conference-review-developer-week-2017', {
      title: 'Conference Review: Developer Week 2017'
    })
  }))
  .get('/post/favorite-stock-photography-sites', ((req, res) => {
    res.render('blog-posts/favorite-stock-photography-sites', {
      title: 'Favorite Stock Photography Sites'
    })
   }))

module.exports = router;