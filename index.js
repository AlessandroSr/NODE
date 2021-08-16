const express = require('express');
const bodyParser = require('body-parser');


//IMPORTAÇÂO DE ROUTES - USER
const userRoute = require('./routes/userRoute');
 
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}))

userRoute(app)

app.get('/',(req,res)=>res.send("Ola Mundo! pelo express"))

app.listen(port, ()=>console.log("API Rodando na porta 3000 !"))