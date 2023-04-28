var http = require('http')
var url = require('url')

http.createServer((req,res)=>{

    var route = req.url
    if(route === '/'){
        res.end("this is Information backend to home page")
    }
    if(route === "/getusernames"){
        var usernames = ['Dhoni', 'Kohali', 'Sachin']
        res.end(JSON.stringify(usernames))
    }

    console.log('My node js Server started succ.....');
}).listen(5000)