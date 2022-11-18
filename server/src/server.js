const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbRouter = require('../src/routers/dbRouter');

const app = express();

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
  console.log(req.body);
  res.send(req.body);
});

app.post('/signup', (req, res) => {
  console.log('this is from the server signup');
  console.log(req.body);
  res.send(req.body);
});

app.post('/createPost', (req, res) => {
  console.log(req.body);
  // insert into database here
  res.end();
})

app.listen(5001, () => {
  console.log(`Server running at http://localhost:5001`);
});
