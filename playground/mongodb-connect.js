// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//   Insert into the collection named Todos
//   db.collection('Todos').insertOne({
//     test: 'Something to do',
//     completed: false
//   }, (err, result) => {
//     if(err){
//       return console.log('Cannot insert into collection');
//     }
//     // console.log(result);
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   });
//
  db.close();
});
