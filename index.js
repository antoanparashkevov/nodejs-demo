const http = require('http');

const router = require('./routes.js') 
const {homePage,defaultPage} = require('./controllers/homeController')
const {aboutPage} = require('./controllers/aboutController')
const {catalogPage, createPage} = require('./controllers/catalogController')

router.get('/', homePage)
router.get('/about', aboutPage)
router.get('/catalog', catalogPage)
router.get('/create', createPage)
router.get('default', defaultPage)

//pass a handler as anonymous function
const server = http.createServer(router.match)


server.listen(3000);

