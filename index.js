var express = require('express');  
var path=require('path')
var app = express();  
var pug=require('pug');
//set view engine  
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');
app.get('/', function (req, res) {  
    // res.render(
    //    'sample',
        // {title:'DURGA PRASAD LAB',message:'WELCOME TO MEAN STACK LAB'})
        const names = ['John Doe', 'Roger Roe', 'Paul Smith', 'Rebecca Jordan','prasasad','Durga','sirisha','anushu'];
        res.render('sample.pug', { 'names': names });
     
});  
var server = app.listen(5000, function () {  
    console.log('Node server is running..');  
});  