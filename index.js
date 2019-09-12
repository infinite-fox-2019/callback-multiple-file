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
  fs.readFile(parent_file, function(err,parents){
    sleep(5000)
    const parentData = JSON.parse(parents)
    fs.readFile(children_file,function(err, children){
      sleep(5000)
      const childrenData = JSON.parse(children)
      for (let i=0; i<parentData.length; i++) {
        parentData[i].children = []
        for (let j=0; j<childrenData.length; j++) {
            if (parentData[i].last_name == childrenData[j].family) {
              parentData[i].children.push(childrenData[j].full_name)
            }
        }
      }
      console.log(parentData)
    })
  })

}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");


