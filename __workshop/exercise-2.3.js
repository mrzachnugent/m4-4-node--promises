// Exercise 2.3 - Use the error
// ----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

const greeting = (langCode) => {
  return request("https://journeyedu.herokuapp.com/hello/" + langCode) // 1
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      return parsedResponse.data;
    })
    .catch((err) => {
      //console.log(err); //long message with error as a key and the value is: '{"status":404,"data":{"code":"kgb"},"message":"Cannot find that language code"}'
      //console.log(err.error); // returns stringify json object
      //   console.log(JSON.parse(err.error)); // returns same as provided answer
      //   return;
      return err.error ? JSON.parse(err.error) : err; //If err (long message), has an error key, return JSON parsed err.error. Or else if the err does not have an error key, simply return err.
    });
};

// Testing
greeting("kgb").then((result) => console.log(result));
