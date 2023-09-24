const http = require('http');
const path = require('path');
const fs = require('fs')
const server = http.createServer(function (req,res){
    const method = req.method;
    if(method === 'GET'){
        const fileName = path.resolve(__dirname,'1.json');
        const stream = fs.createReadStream(fileName);
        stream.pipe(res)
    }
})

server.listen(8080)