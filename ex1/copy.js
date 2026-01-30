const fs = require("fs");
try {
    fs.copyFileSync('source.txt', 'dest.txt');
    console.log('File copied successfully');
} catch (err) {
console.error('Error copying file:', err);
}