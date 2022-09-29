const http = require('http');

const {homePage,defaultPage} = require('./controllers/homeController')
const {aboutPage} = require('./controllers/aboutController')

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


server.listen(3000);

