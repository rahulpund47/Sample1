console.log("Welcome to server App");
// create logic for HTTP server creation

var http=require("http");
var url=require("url");
var fs=require("fs");


var onCreateServer=function(request,response)
{
    // extract name of html file
    //read html file
    // write content of html file into Response object

 var pathname=url.parse(request.url).pathname;
  fs.readFile(pathname.substr(1),
                        function(err,data){
                                if(err)
                                  {
                                    console.log(err);
                                    response.writeHead(404,{'Content-Type':'text/html'});
                                   }
                                 else
                                    {
                                      response.writeHead(200,{'Content-Type':'text/html'});
                                       response.write(data.toString());
                                     }
                                     response.end();
    });
};

var server=http.createServer(onCreateServer);
server.listen(7000);

console.log("Server is listening on port no. http://localhost:7000/");
