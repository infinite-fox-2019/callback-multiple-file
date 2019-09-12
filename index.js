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
  fs.readFile(parent_file, 'utf8', (err, parent_data) => {
    if (err) {
        console.log("File read failed:", err)
        return
      }
    let parents = JSON.parse(parent_data);
    sleep(5000)

    fs.readFile(children_file, 'utf8', (err, children_data) => {
      if (err) {
        console.log("File read failed:", err)
        return
        } 
      let children = JSON.parse(children_data);
      sleep(5000)

      for(let i = 0; i < parents.length; i++) {
        parents[i]['children'] = []
        for (let j = 0; j < children.length; j++) {
          if (parents[i]['last_name'] == children[j]['family']) {
            parents[i]['children'].push(children[j]['full_name'])
          }
        }
      }
      console.log(parents);
    })
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
