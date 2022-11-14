const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome page');
});


app.listen(5001, () => { console.log("Server started on port 5001") });