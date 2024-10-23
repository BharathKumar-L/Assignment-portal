const server = require("http");
const mod = require("./module1");

const response = server
  .createServer((req, res) => {
    res.end("Hello World\n");
    mod("Bharath");
  })    
  .listen(5000, () => {
    console.log(`Server running on port ${5000}`);
  });

