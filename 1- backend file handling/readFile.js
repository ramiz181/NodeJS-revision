import fs from 'fs';


fs.readFile('./test1.txt', 'utf-8', (err, result) => {

    console.log(result);
})

