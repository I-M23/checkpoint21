const fs = require('fs');

fs.readFile('welcome.txt','utf-8',(erreur,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
})
console.log("second log");
