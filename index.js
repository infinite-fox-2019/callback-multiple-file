const fs = require('fs');

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function match_data(parent_file, children_file) {
  // Code here
  fs.readFile(parent_file, function (err, dataParent) {
    let parents = JSON.parse(dataParent);
    for (let i = 0; i < parents.length; i++) {
      parents[i]['children'] = [];
      fs.readFile(children_file, function (err, dataChild) {
        let childrens = JSON.parse(dataChild);
        for (let j = 0; j < childrens.length; j++) {
          if (parents[i].last_name === childrens[j].family) {
            parents[i]['children'].push(childrens[j].full_name);
          }
        }
        console.log(parents);
        sleep(500);
      })
    }
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");