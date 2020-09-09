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

      fs.readFile(children_file, 'utf8', (err, childrens) => {
        sleep(5000)

        if (childrens) {
          const childrensData = JSON.parse(childrens)
          for (let i = 0; i < parentsData.length; i++) {
            parentsData[i].children = []
            for (let j = 0; j < childrensData.length; j++) {
              if (parentsData[i].last_name == childrensData[j].family) {
                parentsData[i].children.push(childrensData[j].full_name)
              }
            }
          }

          console.log(parentsData)
        } else {
          console.log(`Error: ${err.message}`)
        }
      })
    } else {
      console.log(`Error: ${err.message}`)
    }
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
