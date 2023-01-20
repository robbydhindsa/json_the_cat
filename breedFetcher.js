// const breedName = process.argv[2];
const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, (error, response, body) => {
    // console.log("error: " + error);
    // console.log("statusCode: " + response && response.statusCode);
    // console.log("body: " + body);
    // console.log(typeof body);
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (data[0]) {
      return callback(null, data[0]["description"]);
    } else {
      return callback('could not find breed', null);
    }

  });
};

module.exports = { fetchBreedDescription };
