fs = require('fs');

try {
    const arrayOfFiles = fs.readdirSync("C:/Users/dhaval/Desktop/MERN projects")
    console.log(arrayOfFiles);
} catch (e) {
    console.log(e);
}