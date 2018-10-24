const {MongoClient, ObjectID} = require('mongodb');

// Connection url
const url = 'mongodb://localhost:27017/TodoApp';
const dbName = 'Users';


MongoClient.connect(url, (err, client)=>{
    if(err){
       return console.log('Unable to connecto to mongo server..');
    }

    console.log('Successfully connected to mongo server..');
    const db = client.db(dbName);
   // const col = db.collection('find');

    // db.collection('TodoApp').find().toArray().then((err)=>{
    //     console.log(JSON.stringify(docs, undefined, 5));

    // }, (err)=> {
    //     console.log('Unable to fetch Node', err)
    // });

    
    // db.collection('TodoApp').find().count().then((count)=>{
    //     console.log(`To do count : $`);

    // }, (err)=> {
    //     console.log('Unable to fetch Node', err)
    // });

    //const db = client.db(dbName);

    db.collection('Users').find({name : 'Manisha Gaikwad'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 5));
    },(err)=>{
        console.log(err);
    })

    client.close();
})