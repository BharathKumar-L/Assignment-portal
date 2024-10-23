const fsy = require("fs");
const details = fsy.readFile("data.txt", (err, data) => {
  if (err) {
    console.error("please enter valid name");
  } else {
    console.log(data.toString());
  }
});
