const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://aimanshahroz94:4jMdbDyn28DLRfqz@cluster0.qav2cmu.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
    if (!err) {
        console.log('Mongo DB connected');
    } else {
        console.log('Error: ', err);
        process.exit(1);
    }
});

module.exports = client;