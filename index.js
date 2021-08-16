const express = require('express');

//IMPORTAÇÂO DE ROUTES - USER
const userRoute = require('./routes/userRoute');
 
const app = express();
const port = 3000;

app.get('/',(req,res)=>res.send("Ola Mundo! pelo express"))

app.listen(port, ()=>console.log("API Rodando na porta 3000 !"))