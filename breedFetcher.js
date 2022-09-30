const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  breedName = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(breedName, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (body.length === 2) {
      return callback("Unable to find breed", null);
    }
    const data = JSON.parse(body);
    return callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
