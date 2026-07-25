const http = require("http")

const myServer = http.createServer((req,res) => {
    console.log("New Req rec.");
res.end("heelp from server");
}) ;

myServer.listen(8000, () => console.log("Server started!"))