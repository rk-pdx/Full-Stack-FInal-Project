const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbRouter = require('../src/routers/dbRouter');
const { connectToDb, getDb } = require('../src/routers/db');
const { ObjectID } = require('mongodb');
const app = express();
// uncomment to use this connection to the db
// you can use db anywhere in the file
let db;
connectToDb((err) => {
  if (!err) {
    app.listen(5001, () => {
      console.log(`Server running at http://localhost:5001`);
    });
    db = getDb();
  }
});

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

app.post('/login', (req, res) => {
  console.log('this is from the server login');

  db.collection('Author').findOne({ _id: req.body.userName }, (err, result) => {
    if (err) {
      console.log('Author not found err: ', err);
      throw err;
    }

    res.status(200).json(result);
  });
});

app.post('/signup', (req, res) => {
  console.log('this is from the server sign up');

  db.collection('Author')
    .insertOne(req.body.Author)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
  //res.send(req.body);
});

app.get('/GetAllPost', (req, res) => {
  let posts = db.collection('Post').find({});

  console.log(posts);
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

//app.listen(5001, () => {
//  console.log(`Server running at http://localhost:5001`);
//});
