const express = require('express');
const app = express();

const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const SqlQuery = require('./utils/sqlQuery');
sqlQuery = new SqlQuery();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(__dirname + '/public/images'));
// app.use(express.static(__dirname + '/pages/vrHouse'));
app.use('/static', express.static(__dirname + '/pages'));

//访问/public/video.mp4,直接在浏览器中输入http://127.0.0.1/video.mp4 即可（也可重定向），即可在线预览

// morgan.token('localDate',function(req) {
//     return;
// });
app.use(morgan('\x1B[34m:status \x1B[39m::remote-addr :method :url \x1B[36m:res[content-length]B \x1B[39m:response-time ms'));

//路由
app.use('/', function (req, res, next) {
    // if (req.url == '/') return res.redirect(301, 'https://boevr.cn/index');
    if (req.url === '/') return res.redirect(301, 'http://8.131.246.88/index');
    next();
});
app.use('/index', require('./routes/index'));
app.use('/test', require('./routes/test'));
// app.use('/version', require('./routes/version'));
// app.use('/unity', require('./routes/unity'));
app.use('/feature', require('./routes/feature'));

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
