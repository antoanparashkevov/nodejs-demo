const http = require('http');

const router = require('./routes.js') 
const {homePage,defaultPage} = require('./controllers/homeController')
const {aboutPage} = require('./controllers/aboutController')

router.register('/', homePage)
router.register('/about', aboutPage)
router.register('default', defaultPage)

//pass a handler as anonymous function
const server = http.createServer(router.match)


server.listen(3000);

