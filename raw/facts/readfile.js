let fs = require("fs");
console.log("Before");
fs.readFile("f1.txt",function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log("Data->"+data);
    }
})
///////////////////////////
let token =  fs.promises.readFile("f1.txt");
console.log(token);
//consume--
token.then(function(data){
console.log(data);
})
token.catch(function(err){
    console.log(err);
})
// setTimeout(function(){
//     console.log(token);
// },3000);
console.log("After");
