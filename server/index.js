require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 7000 ;
const mongoose = require('mongoose');

// Database connection
mongoose.connect(process.env.DATABASE_URL,(err)=>{ 
    if(err){
        console.log("something went wrong with the database connection");
        console.log(err);
        return;
    }
    console.log("database connection successful");
});

const userRouter = require('./routes/userRouter');


// Middlewares
app.use(express.json());
app.use(cors());

// Routing
app.use('/user',userRouter);


app.listen(PORT,()=>{console.log(`server is listening to port ${PORT}`);})


