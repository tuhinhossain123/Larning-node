const fs = require("fs");

// reading text asynchronusly

fs.readFile("./text/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("Error reading text");
  }
  console.log(data);

  // writting text asynchronusly
  fs.writeFile("./text/read2", data, "utf-8", (err) => {
    if (err) {
      throw Error("Error writting data");
    }
  });
});
