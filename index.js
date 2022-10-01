const http = require('http');

const router = require('./routes.js') 
const {homePage,defaultPage} = require('./controllers/homeController')
const {aboutPage} = require('./controllers/aboutController')
const {catalogPage, createPage} = require('./controllers/catalogController')

router.register('/', homePage)
router.register('/about', aboutPage)
router.register('/catalog', catalogPage)
router.register('/create', createPage)
router.register('default', defaultPage)

//pass a handler as anonymous function
const server = http.createServer(router.match)


server.listen(3000);

