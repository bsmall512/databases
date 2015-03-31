var db = require('../db/index.js');


module.exports = {

  messages: {

    get: function (callback) {
    	var query = "SELECT message.id, messages.text, messages.roomname, users.username FROM messages \
    				LEFT OUTER JOIN users ON (messages.userid = users.id) \
    				ORDER BY messages.id desc";
    	db.query(query, function(err, results){
    		callback(results)
    	})
    },

    post: function (params, callback) {
		var query = "INSERT INTO messages (text, userid, roomname) \
					VALUES (?, (SELECT id FROM users WHERE username = ? LIMIT 1, ?";
    	db.query(query, params, function(err, results){
    		callback(results)
    	 })
    }

  },
 
  users: {
    // Ditto as above.
    get: function (callback) {
    	var query = "SELECT * FROM users";
    	db.query(query, function(err, results){
    		callback(results)
    	})
    },

    post: function (params, callback) {    	
    	var query = "INSERT INTO users (username) VALUES (?)";
    	db.query(query, params, function(err, results){
    		callback(results)
    	})
    }

  }

};

