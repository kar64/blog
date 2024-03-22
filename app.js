const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs=require('fs');

require('dotenv').config()



const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/uploads',express.static('uploads'));

app.use('/api',require('./routes'));

if(!fs.existsSync('uploads')){
    fs.mkdirSync('uploads')
}



module.exports = app;
