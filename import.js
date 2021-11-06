//const MongoClient = require("mongodb").MongoClient;

let csvToJson = require('convert-csv-to-json');

let fileInputName = 'observations-cleaned.csv';
let fileOutputName = 'myOutputFile.json';

csvToJson.fieldDelimiter(',').getJsonFromCsv(fileInputName);
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);


//const connector = mongoose.connect(connectString)

//var json = require('./myOutputFile.json');

//;(async () => {
// const connectString = 'mongodb+srv://m001-student:m001-mongodb-basics@eye4fish.eneq6.mongodb.net/eye4fish?retryWrites=true&w=majority'
// const mongoose = require('mongoose')
// const connector = mongoose.connect(connectString)
//
// const fishies = require('./myOutputFile')
//
// myOutputFile.insertMany(fishies)

// species.insert(
//   {
//  "date": "",
//  "time": "",
//  "latitude": "26.1894474",
//  "longitude": "-80.09024811",
//  "scientific_name": "Centropomus undecimalis",
//  "common_name": "Common Snook"
//   })
  //const username = process.argv[2].split('=')[1]

  //let user = await connector.then(async () => {
    //return findUser(username)
  //})
  // db.species.insert(json, function (err, result) {
  //   if (err) {
  //     console.log("you failed")
  //   } else {
  //     console.log("you passed")
  //   }
  // })
  // if (!user) {
  //   user = await createUser(username)
  //
  //
  // console.log(user)
  //process.exit(0)
//})()

//db.species.insertMany(json);


//let fileInputName = 'observations-cleaned-first10.csv';

//let json = csvToJson.getJsonFromCsv(fileInputName);

//for(let i=0; i<json.length;i++){
    //console.log(json[i]);
//}
