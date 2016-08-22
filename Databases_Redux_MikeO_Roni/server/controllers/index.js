var models = require('../models/index.js');

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "application/json"
};

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(data){
      res.send(JSON.stringify(data));
    });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function(err,data){
        if(err){
          res.end();
        }else{
          res.send(data);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      // res.writehead(201, headers);
      models.users.post(req.body, function(err,data){
        if(err){
          res.end();
        } else {
          res.send(data);
        }
      });
    }
  }
};

