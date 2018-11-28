const proxy=require('http-proxy-middleware');

module.exports=(ex)=>{
    ex.use(proxy('/recognition',{ target: 'http://localhost:3000' }));
    // ex.use(proxy('/api',{ target: 'http://localhost:3000'}));
}