const http = require('http');


function homePage(req,res){
    res.write(html('<h1>Welcome to our page</h1>', 'Home page'))
    res.end()
}

function aboutPage(req,res){
    res.write(html('<h1>Welcome to about page</h1>', 'About page'))
    res.end()
}

function defaultPage(req,res){
    res.statusCode = 404;
    res.writeHead(404, [
        'Content-Type', 'plain/text'
    ])
    res.write('Page not found')
}

const routes = {
    '/': homePage,
    '/about': aboutPage
}

//pass a handler as anonymous function
const server = http.createServer((request, response) => {
    //in the request we have the information for the client behaviour.

    //automatically parsed to lowercase thanks to the http module.
    console.log(request.headers)
    console.log(request.method)
    console.log(request.url)
    

    const url = new URL(request.url, `http://${request.headers.host}`)
    const handlerFunc = routes[url.pathname]

    console.log(url)
    if(typeof handlerFunc === 'function'){
        handlerFunc(request,response)
    }else{
        defaultPage(request,response)
    }

    //directly write on the stream
})

function html(body, title='Demo site') {
    return`
<!DOCTYPE html>
<html lang="en">
<head>
<title> ${title} </title>
</head>
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

