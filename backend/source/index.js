//Create Server
const express = require("express");
const port = process.env.PORT || 3000;

const app = express();

//Add Middleware
app.use(express.json);
app.get("/", (req, res) =>{
    res.status(200).send({message: "Welcome to the safeboda REST API."});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});