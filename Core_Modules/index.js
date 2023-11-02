//! Core Modules -----------------> There are two types of core modules :
//!                                   1. Global Modules
//!                                   2. Non Global Modules


//! Global Modules ---------->
console.log("Hi , console.log is global module");
console.log("-----> " , __dirname);   // ------------> For checking directories name.

//! Non Global Modules ---------->
const fs = require('fs');
fs.writeFileSync("index.txt" , "This is word file");

// const fs = require('fs')writeFileSync; // we can directly write this as well.