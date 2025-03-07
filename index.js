// local module
const { a, add } = require("./local-1");
const { a: a2, add: add2 } = require("./local-2");

console.log(a2);

// build in module

const path = require("path");

console.log(path.join("D:/Level-2/Larning-node/index.js", "local-1.js"));
