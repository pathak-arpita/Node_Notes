console.log("Hiiiiiiiiiii");

//console.log(process);  //! ------------------------> "process" : is a big object in node.js.

console.log(process.argv); 
//!  "argv" ----------> is an Argument Vector.
//! It gives array of two items ----------> 1. Node.js Executable File.
//!                                         2. Path of current File.

//! NOTE ------------> the 3rd item is whatever we are passing with " node .\index.js "


console.log(process.argv[5]); 


//! QUE ). Add the text file if there is " add " in 2nd position in input and delete if " delete "
//!        is in 2nd position.

const input = process.argv;
const fs = require('fs');

if(input[2] == "add"){
    fs.writeFileSync(input[3] , input[4]);
}
else if(input[2] == 'delete'){
    fs.unlinkSync(input[3]);
}
else{
    console.log("Invalid Text");
}