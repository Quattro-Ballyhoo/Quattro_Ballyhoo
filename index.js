const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://m001-student:m001-mongodb-basics@eye4fish.eneq6.mongodb.net/Eye4Fish?retryWrites=true&w=majority";
const fishiesSchema = require("./fishiesSchema.js");
var assert = require("assert");
var output = require("./myOutputFile.js");

// async function createUser(username) {
//   return new User({
//     username,
//     created: Date.now()
//   }).save()
// }
//
// async function findUser(username) {
//   return await User.findOne({ username })
// }

mongoose.connect(connectionString, function(error, result) {
  if (error) {
    console.log("Fail to connect");
  }
  if (result) {
    console.log("Connection worked");
  }
});

//async () => {
const species = mongoose.model("species", fishiesSchema);

let Species = species.find({ latitude: "26.1894474" }).then(
  err => console.log(err),
  species => console.log("test")
);

//mongoose.disconnect();
//};
// ;(async () => {
//   const connector = mongoose.connect(connectionString)
//   const username = process.argv[2].split('=')[1]
//
//   let user = await connector.then(async () => {
//     return findUser(username)
//   })
//
//   if (!user) {
//     user = await createUser(username)
//   }

//console.log(user)
//process.exit(0)
