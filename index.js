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
  let parentData;
  fs.readFile(parent_file, 'utf-8', (err, parents) => {
    // sleep(5000)
    if (err) {
      throw err;
    } else {
      parentData = JSON.parse(parents)
      fs.readFile(children_file, 'utf-8', (err, child) => {
        // sleep(5000)
        if (err) {
          throw err
        } else {
          let childData = JSON.parse(child)
          for (let i = 0; i < parentData.length; i++) {
            const children = []
            for (let j = 0; j < childData.length; j++) {
              if (childData[j].family === parentData[i].last_name) {
                children.push(childData[j].full_name)
              }
            }
            parentData[i]['children'] = children
          }
          console.log(parentData);
        }
      })
    }
  });
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");