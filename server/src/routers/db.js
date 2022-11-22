const { MongoClient } = require('mongodb');

let dbConnection;
let cString =
  'mongodb+srv://ProjectDb:1ezrR8bxfy0LIeRi@cluster0.tz5vubl.mongodb.net/?retryWrites=true&w=majority';

module.exports = {
  connectToDb: (callback) => {
    MongoClient.connect(cString)
      .then((client) => {
        dbConnection = client.db('FallFullStack22');
        console.log('db connected');
        return callback();
      })
      .catch((err) => {
        console.log(err);
        return callback(err);
      });
  },
  getDb: () => dbConnection,
};

module.exports = {
  getAllPosts: () => {},
};
