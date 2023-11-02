//! HTTP ---------------> It is used for handling " REQUEST AND RESPONSE of SERVER IN NODE.JS ".

const http = require("http");

http.createServer((req , resp)=>{
    resp.write("<h1>Hi , this is server response</h1>");
    resp.end();
}).listen(5500)
