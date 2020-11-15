import dummyData from './dummyData.json';
const fs = require('browserify-fs');

export const insertData = data => {
    const oldData = dummyData;

    oldData.push(data)
    // write JSON string to a file
    fs.writeFile('./dummyData.json', JSON.stringify(oldData), (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });
}