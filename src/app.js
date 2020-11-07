const PORT = process.env.PORT || 3000;
var express = require("express");
var cors = require('cors');
var app = express();    
var path = require('path');
var router = express.Router();
var THREE = require('three');
var busboy = require('connect-busboy');
var fs = require('fs-extra');
var database = require('./db.json');
const url = require('url');
var uid = require('uid-safe');

var generate_key = function() {
  return uid.sync(18);
};

var socket = require("socket.io");


app.use(cors());
app.use(express.static(__dirname));
app.use(busboy());
app.set('views', __dirname );
app.set('view engine', 'jade')

const server = app.listen(PORT, function() {
  console.log(`Listening on Port ${PORT}`);
});

const io = socket(server);

var session_to_socket = new Map();
var socket_to_session = new Map();

var find_client = function(req, res){
    for(let i = 0; i < database.model_access.length; i++){
      let client = database.model_access[i];
      if(client.api_key === req.query.api_key){
        return client;
      }
    }
    return null;
}

app.get("/", function(req, res) {
  client = find_client(req, res);
  if (client === null){
    res.sendStatus(403)
  }
  var pathToModel = `./static/models/${client.name}/${req.query.model}`;
  res.render('index', {model: pathToModel, client: client.domain});
});

app.get("/session", function(req, res){
  var key = generate_key();
  while(session_to_socket.has(key)){
    key = generate_key(); 
  }
  session_to_socket.set(key, '');
  res.send({'sessionID': key});
})

app.get("/update", function(req, res) {
  client = find_client(req, res);
  if (client === null){
    res.sendStatus(403);
  }
  if(!req.query.sessionID){
    res.statusCode = 403;
    res.statusMessage = "SessionID is not provided";
    res.send();
  }
  var sessionID = req.query.sessionID;
  var pathToModel = `./static/models/${client.name}/${req.query.model}`;
  io.sockets.to(session_to_socket.get(sessionID)).emit("new model", pathToModel);
      
  res.send();
})


// event fired every time a new client connects:
io.on("connection", (socket) => {
  let url_query = socket.handshake.headers.referer;
  sessionID = url.parse(url_query,true).query.sessionID;
  if(sessionID){
    session_to_socket.set(sessionID, socket.id);
    socket_to_session.set(socket.id, sessionID);
  }
  // when socket disconnects, remove it from the list:
  socket.on("disconnect", () => {
      var sessionID = socket_to_session.get(socket.id);
      if(sessionID){
        socket_to_session.delete(socket.id);
        session_to_socket.delete(sessionID);
      }
  });
});