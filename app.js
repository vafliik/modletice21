const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const minify = require('express-minify');

const indexRouter = require('./routes/index');
const galleryRouter = require('./routes/gallery');
const contactRouter = require('./routes/contact');
const detailsRouter = require('./routes/details');

const app = express();

app.locals.price = '8 484 000';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(compression());
app.use(minify());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/galerie', galleryRouter);
app.use('/kontakt', contactRouter);
app.use('/detaily', detailsRouter);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
