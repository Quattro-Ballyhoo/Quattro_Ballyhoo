const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://m001-student:m001-mongodb-basics@eye4fish.eneq6.mongodb.net/Eye4Fish?retryWrites=true&w=majority";
const fishiesSchema = require("./fishiesSchema.js");
var assert = require("assert");
var output = require("./myOutputFile.js");
<<<<<<< Updated upstream

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
=======
const prompt = require("prompt");
>>>>>>> Stashed changes

mongoose.connect(connectionString, function(error, result) {
  if (error) {
    console.log("Fail to connect");
  }
  if (result) {
    console.log("Connection worked");
  }
});

<<<<<<< Updated upstream
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
=======
prompt.start();

prompt.get(["Species_name"], function(err, result) {
  if (err) {
    return onErr(err);
  }
  return queryData(result);
});

function onErr(err) {
  console.log(err);
  return 1;
}

function queryData(result) {
  const species = mongoose.model("species", fishiesSchema);
  let Species = species.find({ latitude: result.Species_name }).then(
    err => console.log(err),
    species => console.log("test")
  );
}
>>>>>>> Stashed changes
