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
    
    db.collection('Users').findOneAndUpdate({name : 'Prafullkumar Gaikwad'},{
        $set:{
            location : 'Latur Amba'
        },
        $inc:{
            age : 50
        }
    },{
        returnOrignal : false
    }).then((result) => {
        console.log(result);
    })
   
    client.close();
})