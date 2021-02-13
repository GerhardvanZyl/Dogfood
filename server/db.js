const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/mydb'; //TODO: config
const client = new MongoClient(url);

let db;

async function connect() {

    try{
        await client.connect();
        db = client.db('mydb');
        console.log('db connection created');

    } catch(e) {
        console.error('Unable to connect to db: ', e);
    }
}

function getCollection(collectionName){
    return db.collection(collectionName);
}

module.exports = {
    connect,
    getCollection
};
