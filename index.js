const fs = require('fs');

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function match_data(parent_file, children_file, callback) {
  // Code here
  fs.readFile(parent_file, 'utf8', function (err, data_parents) {
    sleep(3000)
    if (err) {
      callback(err)
    } else {
      let parents = JSON.parse(data_parents)
      fs.readFile(children_file, 'utf8', function (err, data_children) {
        if (err) {
          callback(err)
        } else {
          let children = JSON.parse(data_children)
          for (let i = 0; i < parents.length; i++) {
            parents[i].children = []
            for (let j = 0; j < children.length; j++) {
              if (parents[i].last_name === children[j].family) {
                parents[i].children.push(children[j].full_name)
              }
            }
            console.log(parents)
          }
        }
      })
    }
  })
}

match_data('./parents.json', './children.json', function (err,data) {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

console.log("Notification : Data sedang diproses !");
