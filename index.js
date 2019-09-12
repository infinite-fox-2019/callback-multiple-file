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
  fs.readFile('./parents.json', 'utf8', (err, parent_data) => {
    parent_data = JSON.parse(parent_data)
    sleep(5000)
    fs.readFile('./children.json', 'utf8', (err, children_data) => {
      children_data = JSON.parse(children_data)
      sleep(5000)
      for (let i = 0; i < parent_data.length; i++) {
        parent_data[i].children = []
        for (let j = 0; j < children_data.length; j++) {
          if(parent_data[i].last_name === children_data[j].family) {
            parent_data[i].children.push(children_data[j].full_name)
          }
        }
      }
      console.log(parent_data)
    })
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
