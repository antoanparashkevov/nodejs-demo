const http = require('http');

const homePage = `
<h1>Welcome to our page</h1>
`
const aboutPage = `
<h1>Welcome to about page</h1>
`

//pass a handler as anonymous function
const server = http.createServer((req, res) => {
    //in the request we have the information for the client behaviour.

    //automatically parsed to lowercase thanks to the http module.
    console.log(req.headers)
    console.log(req.method)
    console.log(req.url)


    const url = new URL(req.url, `http://${req.headers.host}`)
    console.log(url)
    if (url.pathname === '/') {
        res.write(html(homePage))
        res.end();//this puts an empty row on the last response row
    } else if (url.pathname === '/about') {
        res.write(html(aboutPage))
        res.end()
    } else {
        res.statusCode = 404;
        res.writeHead(200, [
            'Content-Type', 'text/plain'
        ])
        res.write('Wrong page');
        res.end()
    }

    //directly write on the stream
})

function html(body) {
    return`
<!DOCTYPE html>
<html lang="en">
        <body>
    <nav>
            <ul>
            <a href="/">Home</a>
            <a href="/about">About</a>
            </ul>
    </nav>
     ${body}
         </body>
</html>`

}

server.listen(3000);

