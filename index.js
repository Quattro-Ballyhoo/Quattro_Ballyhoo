const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://m001-student:m001-mongodb-basics@eye4fish.eneq6.mongodb.net/Eye4Fish?retryWrites=true&w=majority";
const fishiesSchema = require("./fishiesSchema.js");
var output = require("./myOutputFile.js");
const prompt = require("prompt");
const promptsync = require("prompt-sync")({ sigint: true });

const connect = async _ => {
  try {
    const connectSuccess = await mongoose.connect(connectionString);
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
  let menuChoice = menuSelect();
  //TODO: insert check for valid input
  // function check => {
  //   if (menuChoice != "1" || menuChoice != "2" || menuChoice != "3") {
  //     console.log("invalid input");
  //     menuChoice = menuSelect();
  //   }
  // }
  let searchString;
  let result;
  
  while (menuChoice >= 0 && menuChoice <= 6) {
    searchString = filterInput(menuChoice);
    result = await queryData(searchString, menuChoice);
    menuChoice = menuSelect();
  }
};

connect();

//menu choices function
const menuSelect = () => {
  console.log("Menu:");
  console.log("1. Search by Common Name");
  console.log("2. Search by Scientific Name");
  console.log("3. Latitude");
  console.log("4. longitude");
  console.log("5. Date");
  console.log("6. Exit");
  const menuChoice = promptsync("Please enter menu choice: ");
  //console.log("Menu choice: " + Number(menuChoice));

  //while (menuChoice != "1" && menuChoice != "2" && menuChoice != "3") {
  //  console.log("Not a valid input");
  //menuSelect();
  //}
  return menuChoice;
};

//Entering search string
const filterInput = menuChoice => {
  let menuString = "";
  switch (menuChoice) {
    case "1":
      menuString = "Common Name";
      break;
    case "2":
      menuString = "Scientific Name";
      break;
    case "3":
      menuString = "latitude";
      break;
    case "4":
      menuString = "longitude";
      break;
    case "5":
      menuString = "Date";
      break;
    case "6":
      console.log("Bye!");
      process.exit(0);
    default:
      menuString = "something else"; //this should be invalid input
      break;
  }
  const searchString = promptsync("Please enter the " + menuString + ": ");
  console.log("Search string: " + searchString);
  return searchString;
};

//Query data function
//TODO:  what is dataField type??
function queryData(searchString, menuChoice) {
  let dataField;
  const species = mongoose.model("species", fishiesSchema);
  let Species;
  switch (menuChoice) {
    case "1":
      Species = species
        .find({ common_name: searchString })
        .then(err => console.log(err));
      //dataField = common_name;
      return Species;
      break;
    case "2":
      Species = species
        .find({ scientific_name: searchString })
        .then(err => console.log(err));
      //dataField = "scientific_name";
      return Species;
      break;
    case "3":
      Species = species
        .find({ latitude: searchString })
        .then(err => console.log(err));
      //dataField = "latitude";
      return Species;
      break;
    case "4":
      Species = species
        .find({ longitude: searchString })
        .then(err => console.log(err));
      //dataField = "longitude";
      return Species;
      break;
    case "5":
      Species = species
        .find({ date: searchString })
        .then(err => console.log(err));
      //dataField = "date";
      return Species;
      break;
    // need a default statement
  }
  // console.log(dataField);
  // console.log(searchString);
  // const species = mongoose.model("species", fishiesSchema);
  // let Species = species.find({ dataField: searchString }).then(
  //   err => console.log(err),
  //   species => console.log("test")
  //);
}

// sleep function
// const sleep = ms => {
//   return new Promise(resolve => setTimeout(resolve, ms));
// };

// function onErr(err) {
//   console.log(err);
//   return 1;
// }

//old connection version
// mongoose.connect(connectionString, function(error, result) {
//   if (error) {
//     console.log("Fail to connect");
//   }
//   if (result) {
//     console.log("Connection worked");
//   }
// });
