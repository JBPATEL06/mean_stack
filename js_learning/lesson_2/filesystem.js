// const fs = require('fs');
// fs.mkdir("files/Hello",{ recursive : false},(err) => {
//     if(err) throw err.message;
//     else console.log("done");
// })
require('dotenv').config();

// 2. Access them using process.env
const port = process.env.PORT || 3000; // Falls back to 3000 if PORT is not defined
const dbUrl = process.env.DATABASE_URL;
const apiKey = process.env.API_SECRET_KEY;

console.log(port);
console.log(dbUrl);
console.log(apiKey);