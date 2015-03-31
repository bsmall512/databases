var models = require('../models');
var bluebird = require('bluebird');

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10,
  "content-type": 'application/json'
};

module.exports = {

  messages: {

    get: function (req, res) {
    	var params = 
    	models.exports.messages.get();
    	res.writeHead(headers, 200);
    }, // a function which handles a get request for all messages

    post: function (req, res) {
    	var params = {req.params.username, req.params.text, req.params.roomname};
    	models.exports.messages.post();
    	res.writeHead(headers, 200);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    	models.exports.users.get();
    	res.writeHead(headers, 200);
    },

    post: function (req, res) {
    	models.exports.users.get();
    	res.writeHead(headers, 200);
    }
  }

};

