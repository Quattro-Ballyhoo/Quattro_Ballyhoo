const connectionString = 'mongodb+srv://m001-student:m001-mongodb-basics@eye4fish.eneq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const mongoose = require('mongoose')
const userSchema = require('./userSchema.js')
var assert = require('assert')
const User = mongoose.model('user', userSchema, 'user')

var output = require('./myOutputFile.js')

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

const connector = mongoose.connect(connectionString)
var species = mongoose.model('species', userSchema)
species.collection.insertMany(output, function(err,r) {
    assert.equal(null,err);

})
mongoose.disconnect();
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
//})()
