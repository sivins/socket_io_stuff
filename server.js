var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http)

io.on('connection', function(socket){
    console.log('user connected');
    socket.on('new', function(msg) {
      console.log('Message:', msg);
      socket.nickname = msg.name;
      console.log(socket.nickname);

      socket.emit('response', 'Nickname has been saved');


    });
});


http.listen(3000, function(){
    console.log('listening on *:3000');
});

app.get('/', function(req, res){
   res.sendfile('index.html');
});

