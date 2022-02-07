//imports
const express = require('express');
const app = express();
const port = 3000;

//Static files
app.use(express.static('public'));
//Set views

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));


app.get('', (req, res) => {
    res.render('index')
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/adminR', (req, res) => {
    res.render('adminR')
});

app.get('/eusuarioR', (req, res) => {
    res.render('eusuarioR')
});

app.get('/nusuarioR', (req, res) => {
    res.render('nusuarioR')
});

app.get('/pages-sign-in', (req, res) => {
    res.render('pages-sign-in')
});



//Listen port 3000
app.listen(port, () => console.info('Escuchando puerto ' + port));