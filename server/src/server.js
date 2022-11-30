const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbRouter = require('../src/routers/dbRouter');
const { connectToDb, getDb } = require('../src/routers/db');
const {
  connectDb,
  findOneUser,
  insertUser,
  findAll,
  insertReply,
  getAllRepliesByTitle,
  insertPost,
  updatePostReplyCount,
} = require('../src/routers/userdb');
const app = express();

// uncomment to use this connection to the db
// you can use db anywhere in the file
// let db;
// connectToDb((err) => {
//   if (!err) {
//     app.listen(5001, () => {
//       console.log(`Server running at http://localhost:5001`);
//     });
//     db = getDb();
//   }
// });

app.use(cors());
app.use('/db', dbRouter);

app.use(bodyParser.json()); //Handles JSON requests
app.use(express.urlencoded({ extended: false })); //Handles normal post requests

app.get('/', (req, res) => {
  res.send('Welcome page');
});

app.get('/api', (req, res) => {
  res.json({ posts: ['one', 'two', 'three'] });
});

// This route will retrieve all the posts in the database.
// It will relay a success or failure.
app.get('/getPosts', async (req, res) => {
  console.log('\nThis is from the server getPosts');
  const results = await findAll('Post').catch(console.log('here'));
  console.log('result: ', results);
  if (results) {
    console.log('results: ', results);
    res.status(200).json(results);
  } else {
    console.log('no results for some');
    res.status(400).json(results);
  }
  res.end();
});

// This route will get a user from the database.
// It will relay a success or failure.
app.get('/login', async (req, res) => {
  console.log('\nThis is from the server login');
  const results = await findOneUser(req.query.name).catch(console.log());

  if (results) {
    console.log('results: ', results);
    res.status(200).json(results);
  } else {
    console.log('no results for some');
    res.status(400).json(results);
  }
  res.end();
});

// This route will insert a user into the database.
// It will relay a success or failure.
app.post('/signup', async (req, res) => {
  console.log('\nThis is from the server sign up');
  const results = await insertUser(req.body.Author);
  if (results) {
    console.log('results: ', results);
    res.status(200).send(200);
  } else {
    console.log(results);
    res.status(400).json(results);
  }
  res.end();
});

app.post('/processReply', (req, res) => {
  try {
    insertReply(req.body);
  } catch (exc) {
    console.log(exc);
  }
});

app.get('/getAllRepliesByTitle', async (req, res) => {
  let result = await getAllRepliesByTitle(req.query.pTitle);

  if (result !== []) {
    res.status(200).json(result);
  } else {
    res.status(204);
  }
});

app.post('/updatePostReplyCount', async (req, res) => {
  updatePostReplyCount(req.body);
});

// TODO: Insert the request body into the database
app.post('/createPost', async (req, res) => {
  //console.log(req);
  // insert into database here
  // res.end();
  //console.log(req.body.dataToSend);
  console.log('\nThis is from the server createPost');
  const results = await insertPost(req.body.dataToSend);
  if (results) {
    console.log('results: ', results);
    res.sendStatus(200);
  } else {
    console.log(results);
    res.status(400).json(results);
  }
  res.end();
});

app.listen(5001, () => {
  console.log(`Server running at http://localhost:5001`);
});
