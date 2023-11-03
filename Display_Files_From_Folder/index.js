//! Que ). create 5 files inside the " files " folder just by using " for loop ".

const fs = require('fs');
const path = require ('path');
const pathDir = path.join(__dirname , 'files');
console.log("----> " , pathDir);

for(let i = 0 ; i<5 ; i++){
    fs.writeFileSync(`${pathDir}/hello ${i}.txt`,`This is Hello File and File number is ${i}`);
}