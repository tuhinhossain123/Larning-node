// synchronous way
const fs = require("fs");

// reading a text file
const readText = fs.readFileSync("./text/read.txt", "utf-8");

// writting a text file
const writtingText = fs.writeFileSync(
  "./text/write.txt",
  readText + "This is my file"
);

console.log(writtingText);
