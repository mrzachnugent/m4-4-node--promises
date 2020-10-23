// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: "cd2dbcbb6cb94f37a5723ba08247f514",
    q: `${lat}, ${lng}`,
  };

  return opencage.geocode(requestObj);
}

getAddressFromPosition("6", "-75").then((response) =>
  console.log(response.results[0].formatted)
);
// getAddressFromPosition("48.8584", "2.2945").then((response) =>
//   console.log(response.results[0].formatted)
// );

module.exports = { getAddressFromPosition };
