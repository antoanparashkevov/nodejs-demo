const http = require('http')

const html = `
<!DOCTYPE html>
<html lang="en">
<body>
 <h1>Hello world</h1>
</body>
</html>`

//pass a handler as anonymous function
const server = http.createServer((req,res)=>{
    //in the request we have the information for the client behaviour.
    
    //automatically parsed to lowercase thanks to the http module.
    console.log(req.headers)
    console.log(req.method)
    console.log(req.url)
    console.log('request received')
    
    if(req.url === '/'){
        res.write(html)
        res.end();//this puts an empty row on the last response row
    }else {
        res.statusCode = 404;
        res.writeHead(200, [
            'Content-Type', 'text/plain'
        ])
        res.write('Wrong page');
        res.end()
    }
    
    //directly write on the stream
})

server.listen(3000)