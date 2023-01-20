let args = process.argv.slice(2);

const request = require('request');

request("https://api.thecatapi.com/v1/breeds/search?q=" + args[0], (error, response, body) => {
  //console.log("error: " + error);
  //console.log("statusCode: " + response && response.statusCode);
  // console.log("body: " + body);
  // console.log(typeof body);

  // console.log('-------');
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);

  console.log(data[0]["description"]);
});

