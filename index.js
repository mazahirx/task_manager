const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get(express.json());
app.get(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.set(express.static(path.join(__dirname,'public')));

app.get('/',(req,res) =>{
    fs.readFile(`./files`, (err,files)=>{
        console.log(files);
        res.render("index", {files:files});
    })
})

app.listen(3000);