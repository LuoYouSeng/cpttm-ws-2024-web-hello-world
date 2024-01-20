import express from 'express'
import path from 'path'
import {
  fileURLToPath
} from 'url'

import http from 'http'
import {
  Server
} from 'socket.io'

const __fileName = fileURLToPath(import.meta.url)
const __dirName = path.dirname(__fileName)

const port = 3000

const app = express()
app.use(express.static('public')) // 將 public 下的所有檔案當作靜態文件對外公開

const server = http.createServer(app)
const io = new Server(server)

app.get('/', (req, res) => {
  res.sendFile(__dirName + '/index.html');
})

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('submit message', msg => {
    console.log('message received: ' + msg)
    io.emit('message received', msg)
  })
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})