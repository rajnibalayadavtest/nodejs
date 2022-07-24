const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type','text/html');
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data);      

    }else if(req.url == '/about'){
        res.statusCode = 200;
        res.end("<h1>Hey! About !!!!</h1><p>Hello World!!!</p>");
    }
    else if(req.url == '/hello'){
        res.statusCode = 200;
        res.end("<h1>Hey! Rajni Please do it Now!!!!</h1><p>Hello World!!!</p>");
    }else{
        // res.rajni();
        res.statusCode = 404;
        res.end("<h1>Page Not Found!!!!</h1>");
    }
    console.log(req.url);     
    
});

server.listen(port ,()=>{
    console.log(`Server is listening on PORT ${port}`);
});