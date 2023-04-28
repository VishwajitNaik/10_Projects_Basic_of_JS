const express = require('express');
const ejs = require('ejs');
const bodyparser = require('body-parser')
const mysql = require('mysql');

const app = express();

mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"",
   database:"node_products"
})


// localhost:8080
app.get('/',function(req,res){

   
    var con = mysql.createConnection({
          host:"localhost",
          user:"root",
          password:"",
          database:"node_projects"
       })
       con.query("SELECT * FROM products",(err,result)=>{
          res.render('pages/index',{result:result});
       })
 
 });


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('pages/index');
})

app.listen(3000);
