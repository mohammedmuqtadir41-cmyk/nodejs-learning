const http = require("http");
const fs = require("fs");
const path = require("path");

const myServer = http.createServer((req, res) => {
  // console.log(req.headers);
  const log = `${Date.now()}: ${req.url}New Req Recieved\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    // res.end("Hello from the Server again")
    switch (req.url) {
      case "/":
        res.end("HOMEPAGE");
        break;
      case "/about":
        res.end("THIS IS MOHAMMED MUQTHADIR FULSTACK WEB DEV");
        break;
      case "/contact":
        res.end("+234590");
        break;
      default:
        res.end("404 Error Page not found");
    }
  });
  // res.end("heelp from server");
});

myServer.listen(8000, () => console.log("Server started!"));
