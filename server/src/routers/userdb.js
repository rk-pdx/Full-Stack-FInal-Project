const { MongoClient } = require('mongodb');

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
  }
};

// const findOneUser = async (client, userName) => {

//   const result = await client
//     .db('FallFullStack22')
//     .collection('Author')
//     .findOne({ _id: userName });

//   if (result) {
//     console.log(`Found listing ${userName}`);
//     console.log(result);
//   } else {
//     console.log('no listing found');
//     console.log('no results ', result);
//   }
//   return result;
// };

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
  }
};

module.exports = { connectDb, findOneUser, insertUser };
