// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to server');



  db.collection('Users').find({
    name: 'Minh Tu'
  }).toArray().then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);

  });
  db.close();
});
