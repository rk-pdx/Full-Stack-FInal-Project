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

app.post('/login', async (req, res) => {
  console.log('this is from the server login');
  const results = await findOneUser(req.body.userName).catch(console.error());
  if (results) {
    console.log('results: ', results);
    res.status(200).json(results);
  } else {
    res.status(400).json(results);
  }
});

app.post('/signup', async (req, res) => {
  console.log('this is from the server sign up');
  const results = await insertUser(req.body.Author);
  if (results) {
    console.log('results: ', results);
    res.status(200).json(results);
  } else {
    console.log(results);
    res.status(400).json(results);
  }
  res.end();
});

app.post('/createPost', (req, res) => {
  console.log(req.body);
  // insert into database here
  res.end();
});

app.listen(5001, () => {
  console.log(`Server running at http://localhost:5001`);
});
