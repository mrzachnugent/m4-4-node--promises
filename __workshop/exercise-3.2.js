// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: "cd2dbcbb6cb94f37a5723ba08247f514",
    q: address,
  };

  return opencage.geocode(requestObj).then((data) => {
    return data.results[0].geometry;
  });
};

// getPositionFromAddress("Moabit, Berlin").then((data) =>
//   console.log(data.results[0].geometry)
// );
// getPositionFromAddress(
//   "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
// ).then((data) => console.log(data));

module.exports = { getPositionFromAddress };
