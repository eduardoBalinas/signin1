const express = require('express');
const SESSION = require('express-session');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');

const app = express();
require('./database/connection');
require('./passport/config');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(SESSION({
    secret: 'LaPaginaCODENE',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , '/views'));

app.use(require('./routes/index.js'));

app.listen( 3000 , () =>{
    console.log('ONLINE');
})