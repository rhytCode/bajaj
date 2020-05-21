const  express = require ("express");
const cors = require("cors");
const userRouter = require("./routes/userRouters");
require("./config/database");

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter);


app.get('/', (req,res) =>{
    res.status(200).send ({message: "Welcome to our Authentication Api"});
});

app.listen(port,() =>{
    console.log(`Server running on port ${port}`);
});

