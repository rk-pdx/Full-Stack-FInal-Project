const { MongoClient } = require('mongodb');

// Connects to the database and uses the first argument for the user to find and
// the second argument is a function that searches the database.
// This function was discarded.
const connectDb = async (userName, findOneUser) => {
  const uri =
    'mongodb+srv://ProjectDb:1ezrR8bxfy0LIeRi@cluster0.tz5vubl.mongodb.net/?retryWrites=true&w=majority';
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('db connected');
    return findOneUser(client, userName);
  } catch (err) {
    console.log('Error: ', err);
  } finally {
    setTimeout(() => {
      client.close();
    }, 1500);
  }
};

// Connects to the database to find a user and returns there information.
// Throws an error if nothing is found.
const findOneUser = async (userName) => {
  const uri =
    'mongodb+srv://ProjectDb:1ezrR8bxfy0LIeRi@cluster0.tz5vubl.mongodb.net/?retryWrites=true&w=majority';
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('db connected');
    const result = await client
      .db('FallFullStack22')
      .collection('Author')
      .findOne({ _id: userName });

    if (result) {
      console.log(`Found listing ${userName}`);
      console.log(result);
    } else {
      console.log('no listing found');
      console.log('no results ', result);
    }
    return result;
  } catch (err) {
    console.log('Error: ', err);
  } finally {
    setTimeout(() => {
      client.close();
    }, 1500);
    console.log('Database closed');
  }
};

// Connects to the database to find a all values in a collection and returns there information.
// Throws an error if nothing is found.
const findAll = async (findCollection) => {
  const uri =
    'mongodb+srv://ProjectDb:1ezrR8bxfy0LIeRi@cluster0.tz5vubl.mongodb.net/?retryWrites=true&w=majority';
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('db connected');
    const result = await client
      .db('FallFullStack22')
      .collection(findCollection)
      .find({})
      .toArray();

    if (result) {
      console.log(result);
    } else {
      console.log('no listing found');
      console.log('no results ', result);
    }
    return result;
  } catch (err) {
    console.log('Error: ', err);
  } finally {
    setTimeout(() => {
      client.close();
    }, 1500);
    console.log('Database closed');
  }
};

// Connects to the database to insert a user and returns there information.
// Throws an error if the current author/ user is in the database.
const insertUser = async (author) => {
  const uri =
    'mongodb+srv://ProjectDb:1ezrR8bxfy0LIeRi@cluster0.tz5vubl.mongodb.net/?retryWrites=true&w=majority';
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('db connected');
    const result = await client
      .db('FallFullStack22')
      .collection('Author')
      .insertOne(author);

    if (result) {
      console.log(`Inserted ${author}`);
      console.log(result);
    } else {
      console.log('no listing found');
      console.log('no results ', result);
    }
    return result;
  } catch (err) {
    console.log('Error: ', err);
  } finally {
    setTimeout(() => {
      client.close();
    }, 1500);
    console.log('Database closed');
  }
};

const GetDateToday = () => {
  let date = new Date();
  return `${date.getDay()} ${date.getMonth()}, ${date.getFullYear()}`;
};

const insertReply = async (reply) => {
  const uri =
    'mongodb+srv://ProjectDb:1ezrR8bxfy0LIeRi@cluster0.tz5vubl.mongodb.net/?retryWrites=true&w=majority';

  const dbClient = new MongoClient(uri);

  try {
    await dbClient.connect();

    let success = await dbClient
      .db('FallFullStack22')
      .collection('Replies')
      .insertOne(reply);

    if (success.acknowledged) {
      console.log('Reply Insert Successful');
    } else {
      console.log(
        '[ projectroot.server.src.routers.userdb.js ] Reply Insert Failed.'
      );
    }
  } catch (exc) {
    console.log(
      '[ projectroot.server.src.routers.userdb.js ] Error: Reply Insert Failed'
    );
    console.log(exc);

    // TODO implement logger for exceptions
  } finally {
    dbClient.close();
  }
};

const getAllRepliesByTitle = async (pTitle) => {
  const uri =
    'mongodb+srv://ProjectDb:1ezrR8bxfy0LIeRi@cluster0.tz5vubl.mongodb.net/?retryWrites=true&w=majority';

  const dbClient = new MongoClient(uri);

  try {
    await dbClient.connect();
    let result = await dbClient
      .db('FallFullStack22')
      .collection('Replies')
      .find({ parentTitle: pTitle })
      .toArray();

    return result;
  } catch (exc) {
  } finally {
    dbClient.close();
  }
};

module.exports = {
  connectDb,
  findOneUser,
  insertUser,
  findAll,
  insertReply,
  getAllRepliesByTitle,
};
