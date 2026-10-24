const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors')

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use((req,res,next) =>{
    console.log('[IP:] ', req.ip , '[METHOD] : ', req.method , '[]')
})


const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log('server is starting at ....', PORT)
})