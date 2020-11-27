let http = require("http");
let fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    switch (req.url) {
      case "/":
        //index
        fs.readFile("index.html", function (err, data) {
          res.write(data);
          return res.end();
        });
        break;
      case "/about":
        //about
        fs.readFile("about.html", function (err, data) {
          res.write(data);
          return res.end();
        });
        break;
      case "/contact-me":
        //contact
        fs.readFile("contact-me.html", function (err, data) {
          res.write(data);
          return res.end();
        });
        break;
      default:
        fs.readFile("404.html", function (err, data) {
          res.write(data);
          return res.end();
        });
        //404
        break;
    }
  })
  .listen(8080);
