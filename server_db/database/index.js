require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb://${process.env.DB_URL}`;
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
client.connect();

const worlds = client.db('date-tracker').collection('Worlds');

function getWorlds(name) {
  return worlds.find({username: name}).toArray();
}

function getWorld(username, name) {
  return worlds.findOne({username: username,  name: name});
}

function addWorld(world) {
  return worlds.insertOne({username: world.username, name: world.name, regions: world.regions});
}

module.exports.getWorlds = getWorlds;
module.exports.addWorld = addWorld;
module.exports.getWorld = getWorld;