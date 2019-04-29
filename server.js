var express = require('express')
var rMiddle = require('./router/rMiddle.js')

const app = express();
// remoteapi 开头的转发给接口服务器
// 测试地址 http://localhost:8080/remoteapi/movie/in_theaters?start=0&count=20
app.use('/remoteapi', rMiddle);

// 前端页面渲染
app.get('/index', function (req, res) {
  res.sendFile(__dirname + 'index.html');
})

app.listen('8080', function (err) {
  if (err) {
    return;
  }
  console.log('Listening at localhost:8080');
});