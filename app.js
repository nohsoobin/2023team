// node_modules 에 있는 express 관련 파일을 가져온다.
const express = require('express')

// express 는 함수이므로, 반환값을 변수에 저장한다.
const app = express()

// 3000 포트로 서버 오픈
app.listen(3000, () => {
    console.log("start! express server on port 3000")
})
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap


// request 와 response 라는 인자를 줘서 콜백 함수를 만든다.
// localhost:3000 브라우저에 res.sendFile() 내부의 파일이 띄워진다.

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/view/index.html")
})

// localhost:3000/main 브라우저에 res.sendFile() 내부의 파일이 띄워진다.
app.get('/main', function(req,res) {
    res.sendFile(__dirname + "/view/index.html")
})
// main과 / 은 index home page의미
app.get('/location', function(req,res) {
    res.sendFile(__dirname + "/view/location.html")
})
//location은 위치 페이지

app.get('/extend', function(req,res) {
    res.sendFile(__dirname + "/view/extend.html")
})

//extend는 연장 페이지
app.get('/return', function(req,res) {
    res.sendFile(__dirname + "/view/return.html")
})
//return은 반납 페이지
app.get('/instrument/cable', function(req,res) {
    res.sendFile(__dirname + "/instrument/cable.html")
})
//instrument/cable 케이블 대여 페이지
app.get('/instrument/laptop', function(req,res) {
    res.sendFile(__dirname + "/instrument/labtop.html")
})
app.get('/instrument', function(req,res) {
    res.sendFile(__dirname + "/instrument/labtop.html")
})
app.get('/instrument', function(req,res) {
    res.sendFile(__dirname + "/instrument/labtop.html")
})
app.get('/instrument', function(req,res) {
    res.sendFile(__dirname + "/instrument/labtop.html")
})
app.get('/instrument', function(req,res) {
    res.sendFile(__dirname + "/instrument/labtop.html")
})
app.get('/instrument', function(req,res) {
    res.sendFile(__dirname + "/instrument/labtop.html")
})
app.get('/instrument', function(req,res) {
    res.sendFile(__dirname + "/instrument/labtop.html")
})
app.get('/instrument', function(req,res) {
    res.sendFile(__dirname + "/instrument/labtop.html")
})
