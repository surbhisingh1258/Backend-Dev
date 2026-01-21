const fs = require("fs");
const path = require("path");
const text = fs.readFileSync("input.txt", "utf-8");
const words = text.split(/\s+/);
const wordCount = words.length;

fs.writeFileSync("output.txt", `Total Words: ${wordCount}`);

console.log("Word count written to output.txt");
