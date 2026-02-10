import express from 'express';
const app = express();

app.use((req, res, next) => {
console.log(`${req.method} request to ${req.url} at ${new
Date().toISOString()}`);
next(); 
});

app.get('/', (req, res) => {
    res.send('Home Page');
});
app.listen(3000);