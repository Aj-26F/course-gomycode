// creation de fichier
var fs= require('fs');
fs.appendFile('./welcome.txt','hello world',function(err){
    if (err) throw err;
    console.log('file written');
})

// creation du fichier hello text 
fs.writeFile('./hello.txt','hello world',function(err){
    if (err) throw err;
    console.log('file written');
});
fs.readFile('./hello.txt',function(err,data){
    if (err) throw err;
    console.log("contenue est:" + data);
});