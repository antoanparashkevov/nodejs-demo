const {html} = require('../util.js')

function homePage(req,res){
    res.write(html('<h1>Welcome to our page</h1>', 'Home page'))
    res.end()
}

function defaultPage(req,res){
    res.statusCode = 404;
    res.writeHead(404, [
        'Content-Type', 'plain/text'
    ])
    res.write('Page not found')
}
module.exports = {
    homePage,
    defaultPage
}