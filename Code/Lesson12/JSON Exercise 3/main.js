const fs = require('fs');

// Define the file path to the JSON file
const filePath = './example_2.json';
let dataJSON = null;

try {
  // Read the JSON file synchronously
  dataJSON = fs.readFileSync(filePath, 'utf8');

//   console.log('JSON data loaded successfully');
} catch (err) {
  console.error('Error reading or parsing file', err);
}

//------------------Add your code here----------------------------
// The JSON string has been loaded into the program as is a string variable dataJSON
// Convert it to a JS object string with parse
// Print the question and answer for q1
// Refer to the JSON file to see the hierarchy 





