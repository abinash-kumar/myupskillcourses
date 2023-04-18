const { MongoClient } = require('mongodb');

// Connection URI and database name
const uri = "mongodb+srv://abinashlv:myupskill%40123@clients.plsunny.mongodb.net/sales?retryWrites=true&w=majority";
const dbName = 'sales';

// Create a new MongoClient
const client = new MongoClient(uri);

let clientPromise;
clientPromise = client.connect();

export default clientPromise;

