const express = require('express');     
const app = express();
const path = require('path');
const fs = require('fs');

//Parsers Setting
app.use(express.json());                        
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res) =>{
    fs.readdir(`./files`, (err,files)=>{
        res.render("index", {files:files});     //rendring data to index ejs file
    })
})
app.get('/show/:filename',(req,res) =>{     //filename as variable to store the different names
    fs.readFile(`./files/${req.params.filename}`,"utf-8", (err,filedata)=>{
        res.render("show", {filename:req.params.filename, filedata:filedata});
    });
})
app.get('/edit/:filename',(req,res) =>{
    res.render("edit", {filename:req.params.filename});
})

app.post('/create',(req,res)=>{     //naming the filetitle
    fs.writeFile(`./files/${req.body.title.split(" ").join('')}.txt`, req.body.title, (err)=>{
        res.redirect("/");
    });
})
app.post('/edit',(req,res)=>{
    fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}.txt`, (err)=>{
        res.redirect("/");
    });
})

app.listen(3000);