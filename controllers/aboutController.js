const {html} = require('../util')

function aboutPage(req,res){
    res.write(html('<h1>Welcome to about page</h1>', 'About page'))
    res.end()
}
module.exports = {aboutPage}