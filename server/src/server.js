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

app.post('/createPost', (req, res) => {
  // use db connection to insert new post to Post table
  db.collection('Post').insertOne(req.body, function (err, result) {
    if (err) {
      console.log('Post Insert Error');
      res.status(400).send('Post Failed');
    } else {
      console.log('Post Successful');
      res.status(204).send();
    }
  });

  res.end();
});

app.listen(5001, () => {
  console.log(`Server running at http://localhost:5001`);
});
