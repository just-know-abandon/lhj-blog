var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
const RedisStore = require('connect-redis')(session)

var noteRouter = require('./routes/note');
var blogRouter = require('./routes/blog');
var userRouter = require('./routes/user');

var app = express();

// 解决跨域
app.all('*', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

const redisClient = require('./db/redis')
const sessionStore = new RedisStore({
  client: redisClient
})
app.use(session({
  secret: 'lhJ_#123456#', // 加密
  cookie: {
    path: '/',  // 默认
    httpOnly: true, // 默认
    maxAge: 24 * 60 * 60 * 1000,  // 24小时失效
  },
  store: sessionStore // 要开启redis才能生效
}))

app.use('/note', noteRouter);
app.use('/blog', blogRouter);
app.use('/user', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
