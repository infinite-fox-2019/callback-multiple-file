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
  fs.readFile(parent_file, (error, dataParent) => {
    if (error) throw error
    sleep(5000)
    fs.readFile(children_file, (error, dataChildren) => {
      if (error) throw error
      sleep(5000)
      const parent = JSON.parse(dataParent)
      const children = JSON.parse(dataChildren)
      parent.forEach(elmParent => {
        elmParent.children = []
        children.forEach(elmChild => {
          if (elmChild.family === elmParent.last_name) {
            elmParent.children.push(elmChild.full_name)
          }
        })
      });
      console.log(parent)
    })
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
