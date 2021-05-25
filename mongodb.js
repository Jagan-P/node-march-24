const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27018';

const dbName = 'local';
const client = new MongoClient(url);

client.connect(function (err) {
    if(err) {
        console.log(err);
    }
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    db.collection('Users').insertOne({
        item: 'new',
        qty: 15
    })

    // db.collection('Users').insertMany([
    //     {item: 'new1', qty: 1},
    //     {item: 'new2', qty: 2}
    // ])


    client.close();
});