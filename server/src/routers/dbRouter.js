const express = require('express');
//const debug = require('debug')('app:dbRouter');
const { MongoClient } = require('mongodb');
const testData = require('../TestData/sessions.json');

const uri = '';
const dbRouter = express.Router();

dbRouter.route('/').get((req, res) => {
  const dbName = 'cluster0';

  (async function mongo() {
    let client;

    try {
      client = await MongoClient.connect(uri);
      console.log('Database Connected!');
      const db = client.db(dbName);
      const response = await db.collection('sessions').insertMany(testData);
      res.json(response);
    } catch (error) {
      console.log(error.stack);
    }
  })();
});

module.exports = dbRouter;
