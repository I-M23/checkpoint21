const fs = require('fs')
const generatePassword = require('generate-password')

const password = generatePassword.generate({
    lenght:12,
    numbers:true,
    uppercase : true,
})

console.log(password);

fs.writeFile('welcome.txt',password,(err)=>{
    if(err){
        console.log(err);
    }
})