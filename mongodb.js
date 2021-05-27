const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27018';
const ObjectId = require("mongodb").ObjectId;

const dbName = 'local';
const client = new MongoClient(url);

let id = new ObjectId();
console.log(id, id.id, id.getTimestamp());

client.connect(function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    // db.collection('Users').insertOne({
    //     _id: id,
    //     item: 'new',
    //     qty: 15
    // }).then((success)=>{
    //     console.log(success)
    // }).catch((error)=>{
    //     console.log(err);
    // })

    // db.collection('Users').insertMany([
    //     {item: 'new1', qty: 1},
    //     {item: 'new2', qty: 2}
    // ], (err, data)=>{
    //     console.log(err, data);
    // })

    // db.collection("Users").findOne({
    //    item: "bikes"
    // }, (err, data)=>{
    //     console.log(err, data);
    // })

    // db.collection("Users").find({
    //     item: "bikes"
    // }).count((err, data)=>{
    //     console.log(err, data);
    // });

    // db.collection("Users").find({
    //     qty: {
    //         $lt: 2
    //     }
    // }).toArray((err, data)=>{
    //     console.log(err, data, data.length);
    // });

    // db.collection("Users").updateOne({
    //     _id: new ObjectId("60ac697505337a7eb1658025")
    // }, {
    //     $set: {
    //         item: "lorry new",
    //         qty: 10
    //     }
    // }, (err, data)=>{
    //     console.log(err, data);
    // })

    // db.collection("Users").updateMany({
    //     // qty: 15
    //     qty: {
    //         $gt: 10
    //     },
    //     item: 'new'
    // }, {
    //     $set: {
    //         qty: 14
    //     }
    // }, (err, data)=>{
    //     console.log(err, data)
    // })

    // db.collection("Users").deleteOne({
    //     _id: new ObjectId("60af05f1a4305d19282a8199")
    // }, (err, data)=>{
    //     console.log(err, data);
    // })

    db.collection("Users").deleteMany({
        qty: 1,
        item: "new1"
    }, (err, data)=>{
        console.log(err, data);
    })

    client.close();
});