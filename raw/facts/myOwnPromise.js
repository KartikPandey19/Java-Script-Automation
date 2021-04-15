let fs = require("fs");
function promiseifiedreadfile(filePath){
    return new Promise(function(resolve,reject){
        fs.readFile(filePath,function cb(err,data){
        if(err){
            reject(err);
        }else{
            resolve(data);
        }
        })
    })
}
let freadpromise = promiseifiedreadfile("f1.txt");
console.log(freadpromise);
freadpromise.then(function(data){
    console.log("content->"+data);
})
freadpromise.catch(function(err){
    console.log(err);
})