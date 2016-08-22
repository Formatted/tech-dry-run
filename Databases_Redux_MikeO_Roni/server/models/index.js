var db = require('../db/index.js');

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('SELECT * FROM messages', function(err,result){
        if(err){
          console.log(err);
        } else {
          callback(result);
        }
      });

    }, // a function which produces all the messages


    post: function (msgBody,callback) {
      db.connection.query('INSERT INTO messages set ?', msgBody, function(err,result){
          if(err){
            console.log("error w/ message posting", err);
          } else{
            callback(result);
          }
        });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (userName, callback) {  //req.body from controllers
      db.connection.query('INSERT INTO users set ?', userName, function(err, result){
        if (err) {
          console.log("error w/ username posting", err);
        } else {
          callback(result);
        }
      });
    }
  }
};

