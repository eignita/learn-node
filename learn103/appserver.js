const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    const greet = _.once(()=>{
        console.log('run only once');
    })
    greet();
    greet();

    // set response header
    // res.setHeader('Content-Type','text/html');
    // res.write('<p>Hello world</p>');
    // res.write('<p>Hello again world</p>');
    // res.end();
    res.setHeader('Content-Type', 'text/html');
    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;    
        default: 
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, {encoding: 'utf8'}, (err, data)=>{
        if(err) {
            console.log('Error', err);
            res.end();
        }
        res.end(data);
    });

});

server.listen(3000, 'localhost', ()=>{
    console.log('server listening to port 3000');
});