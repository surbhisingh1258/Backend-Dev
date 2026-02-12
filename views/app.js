import express from "express";
import validateYear from "./index.js";

const app=express();
const PORT = 5000;

app.get('/books',validateYear, (req,res) => {

    let {year,author} = req.query;

    const books = [
        { title:"title1", author:"author1", year:"2021"},
        { title:"title2", author:"author2", year:"2024"},
        { title:"title3", author:"author1", year:"2022"},
        { title:"title4", author:"author4", year:"2024"}
    ];

    let filter = books;
    if(author){
        filter = books.filter((value) => value.author == author);
    }
    if(year){
        filter = books.filter((value) => value.year == year);
    }
    res.send(filter);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});