import express from "express";
const app = express();
const PORT = 3000;
app.get('/users', (req, res) => {


    let name = req.query.name
    const users = [
        { id: 1, name:"Dev"},
        { id: 2, name: "Nishant"},
        { id: 3, name: "Ananya"},
        { id: 4, name: "Akshita"}
    ];

    let rer = users.find((value)=> value.name==name)
    res.send(rer)

    res.send(users);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});