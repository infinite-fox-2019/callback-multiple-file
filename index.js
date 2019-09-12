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
  fs.readFile(parent_file, 'utf8', (err, parents) => {
    if (parents) {
      const parentsData = JSON.parse(parents)

      for (let i = 0; i < parentsData.length; i++) {
        fs.readFile(children_file, 'utf8', (err, childrens) => {
          if (childrens) {
            const childrensData = JSON.parse(childrens)
              parentsData[i].children = []
              for (let j = 0; j < childrensData.length; j++) {
                if (parentsData[i].last_name == childrensData[j].family) {
                  parentsData[i].children.push(childrensData[j].full_name)
                }
              }
            } else {
            console.log(`Error: ${err.message}`)
          }

          console.log(parentsData)
          sleep(5000)
        })
      }
    } else {
      console.log(`Error: ${err.message}`)
    }
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
