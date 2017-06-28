const express = require('express'),
      router = express.Router(),
      nodemailer = require('nodemailer');

router.get('/', ((req, res) => { res.render('contact', {title: 'Contact'}) }))
  .get('/sent', ((req, res) => { res.render('contact/sent', {title: 'Message Sent'}) }))
  .get('/sendError', ((req, res) => { res.render('contact/sendError', {title: 'Message Failed'}) }))
  .post('/send', ((req, res) => {
    // Setting up contact form mailer

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        type: 'OAuth2',
        user: 'michelle@michellejl.com',
        clientId: '414094658758-r0ld0ul0o7js6j2bimo3p0213r3346hk.apps.googleusercontent.com',
        clientSecret: 'HWjMHFn-fVohl_azlxjcF48u',
        refreshToken: '1/9sMCFjaR4QOnbiMBAGCh48LVxs0Z-PaxCi_S9MF64Rc',
        accessToken: 'ya29.GltsBDTgYFgirBVCbK-KxITTuLn_bgOKcc31iG75hQeqyoFSpikfV7Ub3Uqt7rQovxdsaW_2Zzsc76LX2IZkJ-eLsOdGNRXjOUuKH5DmOTlKGjEL6NbEH1zX9vGR',
        expires: 1484314697598
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: 'michelle@michellejl.com', // sender address needs to match auth user
      replyTo: req.body.name +  '<' + req.body.email + '>', // user entered email
      to: ['michelle@michellejl.com'], // list of receivers
      subject: 'MichelleJL Contact Form', // Subject line
      text: 'Name: ' + req.body.name + ' \nEmail: ' + req.body.email + ' \nMessage: ' + req.body.message, // plain text body
      //html: '<b>Hello world ?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.redirect('/contact/sendError')
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
      res.redirect('/contact/sent')

    });
  }))

module.exports = router;