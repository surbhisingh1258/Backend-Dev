const fs = require("fs");

const text = "this text is written using JavaScript";

fs.writeFileSync("new.txt", text);

console.log("Data written to file successfully");
