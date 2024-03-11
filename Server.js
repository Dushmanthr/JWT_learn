const express = require('express')
const mongoose = require("mongoose")
const router = require("./routes/user-routes")
const cookieParser = require("cookie-parser")


const app = express();

app.use(cookieParser())
app.use(express.json())
app.use('/api', router);

const DB_URL = "mongodb+srv://dushmantha15ranathunga:Dushmantha123@autho.uehj6iv.mongodb.net/?retryWrites=true&w=majority&appName=autho"


mongoose.connect(DB_URL)
.then(()=>{
    console.log("DB connected");
})
.catch((err)=> console.log('DB connection error', err));




app.use('/', (req, res, next)=>{
    res.send("Hi there");
});



//port define
const PORT = 5000;


app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
})