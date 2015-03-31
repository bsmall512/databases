var db = require('../db/index.js');




module.exports = {

  messages: {
    get: function (messages, roomname) {
    	db.query('SELECT * FROM messages ')
    }, // a function which produces all the messages
    post: function () {

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {

    },

    post: function () {

    }

  }
  
};

