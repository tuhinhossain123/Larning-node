const http = require("http");
const fs = require("fs");
const { buffer } = require("stream/consumers");

// creating a server using raw node.js
const server = http.createServer();

// listener
server.on("request", (req, res) => {
  if (req.url === "/read-file" && req.method === "GET");

  //   streaming file reading
  const readablesStream = fs.createReadStream(process.cwd() + "/text/read.txt");
  readablesStream.on("data", (buffer) => {
    res.statusCode = 200;
    res.write(buffer);
  });
  readablesStream.on("end", () => {
    res.statusCode = 200;
    res.end("The Streaming is over");
  });
  readablesStream.on("end", (error) => {
    console.log(error);
    res.statusCode = 200;
    res.end("Something Went Wrong!!");
  });
});

server.listen(5000, () => {
  console.log("server is listening on port 5000");
});
