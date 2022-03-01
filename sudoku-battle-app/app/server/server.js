'use strict'


var express = require('express')
var app = express()
    // const WebSocket = require('ws')
const PORT = 8080
const HOST = '0.0.0.0'

var http = require('http')
const server = http.Server(app)

// const functions = require('firebase-functions')
// constants


// Application

var router = express.Router()
app.use(express.static('./app'))
app.use(express.static('server'))
app.use(express.static('client'))


app.use('/', function(req, res) {
    res.on('error', function(err) {
        console.log('someting wrong')
    })
    req.on('error', function(err) {
        console.log('request error')
    })
    res.sendfile('./client/sudoku.html')
})

// server.listen(PORT, HOST);
// console.log('listen' + PORT)
// const io = require('socket.io')(server)
const wss = require('ws').Server
const ws = new wss({ port: PORT })
ws.on('connection', (socket) => {
    socket.on('disconnect', () => console.log('disconnect'))
    console.log('hello')
})
console.log(ws)
module.exports = router