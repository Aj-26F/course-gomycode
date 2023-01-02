// creation du serveur
var http = require("http"); 
http.createServer(function(req, res){ //req c est l'ensemble des informations liées aux serveur
    res.writeHead(200,{'Content-Type': 'text/html'});  //res permet d'interagir avec le serveur
    res.write('<h1> hello node!!!!</h1>\n');
    res.end()

}).listen(3000);