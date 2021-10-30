let csvToJson = require('convert-csv-to-json');

let fileInputName = 'observations-cleaned-first10.csv';
let fileOutputName = 'myOutputFile.json';

csvToJson.fieldDelimiter(',').getJsonFromCsv(fileInputName);
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);

//let fileInputName = 'observations-cleaned-first10.csv';

//let json = csvToJson.getJsonFromCsv(fileInputName);

//for(let i=0; i<json.length;i++){
    //console.log(json[i]);
//}
