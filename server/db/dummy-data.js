
const faker = require('faker');
var fs = require('fs');


var dummyData= [];


var generateData  = () => {
  for(let i = 1; i<=100; i++) {
    dummyData.push({
      id:i,
      image_url: faker.image.cats()
    });
  }
  var json = JSON.stringify(dummyData);
  fs.writeFile('data.json', json, 'utf8', ()=>{console.log("done")});
};



module.exports = generateData;