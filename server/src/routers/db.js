const { MongoClient } = require('mongodb');

let dbConnection;

module.exports = {
  connectToDb: (callback) => {
    MongoClient.connect(
      'mongodb+srv://ProjectDb:1ezrR8bxfy0LIeRi@cluster0.tz5vubl.mongodb.net/?retryWrites=true&w=majority'
    )
      .then((client) => {
        dbConnection = client.db();
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
