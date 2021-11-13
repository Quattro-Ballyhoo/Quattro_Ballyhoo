const mongoose = require("mongoose");
const connectionString = "mongodb+srv://m001-student:m001-mongodb-basics@eye4fish.eneq6.mongodb.net/Eye4Fish?retryWrites=true&w=majority";
const fishiesSchema = require("./fishiesSchema.js");
var output = require("./myOutputFile.js");
const prompt = require('prompt');
​
mongoose.connect(connectionString, function(error, result)
{
  if (error) {
    console.log("Fail to connect");
  }
  if (result) {
    console.log("Connection worked");
  }
});
​
prompt.start();
​
prompt.get(['Species_name'], function(err,result) {
  if (err) {return onErr(err);}
  return queryData(result);
});
​
function onErr(err) {
  console.log(err);
  return 1;
};
​
function queryData(result) {
  const species = mongoose.model("species", fishiesSchema);
​
  let Species = species.find({latitude: result.Species_name}).then(
    err => console.log(err),
    species => console.log("test")
  );
};
