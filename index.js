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
  let parentData

  fs.readFile(parent_file, (err, data) => {
    sleep(5000)
    if (err) {
      throw err
    } else {
      parentData = JSON.parse(data)
    }

    fs.readFile(children_file, (err, data) => {
      sleep(5000)
      if (err) {
        throw err
      } else {
        let childrenData = JSON.parse(data)

        parentData.forEach(parent => {
          parent.children = []
          childrenData.forEach(child => {
            if (parent.last_name === child.family) {
              parent.children.push(child.full_name)
            }
          })
        });
      }
      console.log(parentData)
    })
  })

}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
