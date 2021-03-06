process.env.MONGODB_URI = 'mongodb://localhost/engagementlettertest';
const mongoose = require('mongoose');
const port = process.env.PORT = 5000;
const server = require(__dirname + '/../../server.js');
module.exports = exports = (callback) => {
  mongoose.connect(process.env.MONGODB_URI, () => {
    server.listen(port, () => {
      console.log('server up on port:' + port);
      callback();
    });
  });
};
