var gepwd= require("generate-password");
var password= gepwd.generate({
    length: 14,
    numbers: true,
    symbols: true,
});
console.log("le mot de passe gérnéré est: "+password);