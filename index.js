const http = require('http');

const fs = require('fs');

// const path = require('path');

const PORT = 3003;


http.createServer((req,res)=>{

    if(req.url === '/'){
        let html = fs.readFileSync('./index.html');
        res.end(html);
    }else if(req.url === '/dist/main.js'){
        let html = fs.readFileSync('./dist/main.js');
        res.end(html);
    }else{
        res.end('No permission');
    }

}).listen({port:PORT},()=>{
    console.log('\n\n\nserver run\n\n\n');
})