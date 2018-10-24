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
    
    // delete Many

    // db.collection('Users').deleteMany({name : 'Prafullkumar Gaikwad'}).then((result)=>{
    //     console.log(result);
    // })

    // delete one
    //it take some criteria but delete first find 

    //findoneand delete
    db.collection('Users').findOneAndDelete({name : 'Namrata Gaikwad'}).then((result)=>{
        console.log(result);
    })
   
    client.close();
})