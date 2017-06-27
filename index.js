const   express = require('express'),
        path = require('path'),
        bodyParser = require('body-parser'),
        nodemailer = require('nodemailer');

let app = express();

app.set('views', path.join(__dirname, 'views'))
    .set('view engine', 'pug');

// Middleware ======================================================================
app.use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))
    .use(express.static(path.join(__dirname, 'public')))


// Routers =========================================================================
app.get('/', ((req, res) => { res.render('index', {title: 'Welcome'}) }))
    .get('/feed', ((req, res) => { res.render('feed', {title: 'Social Feed'}) }))
    .get('/portfolio', ((req, res) => { res.render('portfolio', {title: 'Portfolio'}) }))
    .get('/resume', ((req, res) => { res.render('resume', {title: 'Resume'}) }))
    .get('/blog', ((req, res) => { res.render('blog', {title: 'Blog'}) }))
    .get('/blog/post/my-experiences-with-women-who-code-portland', ((req, res) => { res.render('blog-posts/my-experiences-with-women-who-code-portland', {title: 'My Experiences with Women Who Code Portland'}) }))
    .get('/blog/post/everything-i-forgot-about-images', ((req, res) => { res.render('blog-posts/everything-i-forgot-about-images', {title: 'Everything I Forgot About Images'}) }))
    .get('/blog/post/conference-review-developer-week-2017', ((req, res) => { res.render('blog-posts/conference-review-developer-week-2017', {title: 'Conference Review: Developer Week 2017'}) }))
    .get('/blog/post/favorite-stock-photography-sites', ((req, res) => { res.render('blog-posts/favorite-stock-photography-sites', {title: 'Favorite Stock Photography Sites'}) }))
    .get('/contact', ((req, res) => { res.render('contact', {title: 'Contact'}) }))
    .get('/contact/sent', ((req, res) => { res.render('contact/sent', {title: 'Message Sent'}) }))
    .get('/contact/sendError', ((req, res) => { res.render('contact/sendError', {title: 'Message Failed'}) }))
    .post('/contact/send', ((req, res) => {
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












// Run the thing! Yay
app.listen(8080)
console.log('Server is running at port 8080')
