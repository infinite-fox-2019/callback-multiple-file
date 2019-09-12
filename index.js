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
  fs.readFile(parent_file, 'utf8', (err, dataParent) => {
    sleep(1000)
    fs.readFile(children_file, 'utf8', (err2, dataChild) => {
      let dataParent_ = JSON.parse(dataParent)
      let dataChildern_ = JSON.parse(dataChild)
      dataParent_.forEach(parentObject => {
          parentObject.childern = []
          dataChildern_.forEach(childObject => {
            if(childObject.family === parentObject.last_name)parentObject.childern.push(childObject.full_name)
          })
      });
      console.log(dataParent_)
    })
  })

}

match_data('./parents.json', './children.json')
// console.log("Notification : Data sedang diproses !");
