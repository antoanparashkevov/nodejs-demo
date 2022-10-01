const routes = {}

//routes = {
// '/create': {
// 'GET': function()...,
//  'POST': function()...
// }
// }

function register(method,path,handler){
    // routes[path] is object
    if(routes[path] === undefined){
        routes[path] = {}
    }
    routes[path][method]=handler;
}
function match(request,response){
    const url = new URL(request.url, `http://${request.headers.host}`)
    
    let handler;//undefined by default
    const actions = routes[url.pathname]//object
    if(actions !== undefined) {
        handler = actions[request.method]
    }
    
    if(typeof handler === 'function') {
        handler(request,response)
    }else{
        //handler['url.pathname']['request.method']
        routes['default']['GET'](request,response)
    }
    
}
module.exports = {
    //or get: (path, handler)=> register('GET', path, handler)
    register,
    get: register.bind(null,'GET'),
    post: register.bind(null,'POST'),
    match
}

