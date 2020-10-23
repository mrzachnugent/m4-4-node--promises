// Exercise 3.1 - `getIssPosition`
// -----------------------------
const rp = require("request-promise");
// require the 'request-promise' module.

// Returns the current position of the ISS
const getIssPosition = () => {
  return rp("http://api.open-notify.org/iss-now.json")
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      return {
        lat: parsedResponse.iss_position.latitude,
        lng: parsedResponse.iss_position.longitude,
      };
    });
};

// getIssPosition().then((results) => console.log(results));

module.exports = { getIssPosition };
