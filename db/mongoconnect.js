// 2
const mongoose = require('mongoose');
const {confsecretList} = require('../config/secret.js');
main().catch(err => console.log(err));

async function main() {
  // mongoose.set('strictQuery' , false);

  await mongoose.connect(`mongodb+srv://${confsecretList.USERNAME}:${confsecretList.PASSWORD}@cluster0.ls0l2.mongodb.net/`);
  console.log("mongo connect started");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}