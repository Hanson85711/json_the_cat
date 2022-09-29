const request = require('request');
const myArgs = "https://api.thecatapi.com/v1/breeds/search?q=" + process.argv.slice(2)[0];

request(myArgs, (error, response, body) => {
  if (error) {
    return console.log("Error: ", error);
  }
  if (body.length === 2) {
    return console.log("Unable to find breed");
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
  console.log(typeof data);
});