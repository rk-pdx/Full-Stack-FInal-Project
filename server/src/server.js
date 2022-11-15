const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());


app.get('/', (req, res) => {
    res.send('Welcome page');
});


app.get('/api', (req, res) => {
    res.json({"posts":["one", "two", "three"]});
});


app.listen(5001, () => { console.log("Server started on port 5001") });