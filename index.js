const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

const router = express();

router.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials');

router.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'Home'
    });
});

router.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'about'
    });
});

router.get('/data', (req, res) => {
    res.render('/data.hbs', {
        title: 'data'
    });
});

router.listen(port);