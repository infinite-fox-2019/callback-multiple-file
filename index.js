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
  fs.readFile(parent_file, 'utf8', function(err, strParents) {
    fs.readFile(children_file, 'utf8', function(err, strChildren) {
      let parentsList = JSON.parse(strParents);
      let childrenList = JSON.parse(strChildren);
      for(let i = 0; i < parentsList.length; i++) {
        parentsList[i].children = [];
        for(let j = 0; j < childrenList.length; j++) {
          if(parentsList[i].last_name === childrenList[j].family) {
            parentsList[i].children.push(childrenList[j].full_name);
          }
        }
        console.log(parentsList[i]);
        sleep(5000);
      }
    });
  });
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
