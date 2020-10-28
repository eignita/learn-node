const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  //this request is running on server not in browser so below log not seen in browser
  console.log("request processed");
  console.log(req.url, req.method);
  //set kind of content to be sent back
  // res.setHeader('Content-Type', 'text/plain');
  // res.write('Hello 101 on server!!');
  res.setHeader("Content-Type", "text/html");
  // res.write('<p>Hello 101 html res from node</p>')

  let path = "./views";
  switch (req.url) {
    case "/":
      path += "/index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "/about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      // redirect statuscode 301
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += "/404.html";
      res.statusCode = 404;
      break;
  }
  fs.readFile(path, (err, data) => {
    //res.write(data1);
    res.end(data);
  });
});
server.listen(8080, "localhost", () => {
  console.log("listening for request on port 8080");
});
