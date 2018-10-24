const {MongoClient, ObjectID} = require('mongodb');

// Connection url
const url = 'mongodb://localhost:27017/TodoApp';
var id = new ObjectID();
console.log(id)
// Database Name
;

MongoClient.connect(url, (err, client)=>{
    if(err){
       return console.log('Unable to connecto to mongo server..');
    }

    console.log('Successfully connected to mongo server..');
    //const db = client.db('TodoApp');

    // db.collection('TodoApp').insertOne({
    //     text : 'Something to do',
    //     completed: false

    // },(err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //      }

    //      console.log(JSON.stringify(result.ops, undefined, 5));

    // });

    const db = client.db('Users');
    db.collection('Users').insertOne({
        name : 'Padmraj Gaikwad',
        age : 28,
        location : 'Pune'
       
    },(err, result)=>{
        if(err){
        return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 5));
    });



    client.close();
})