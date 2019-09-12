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
  fs.readFile(parent_file, 'utf8', function(err, strParents) {
    if(err) {
      console.log('Terjadi kesalahan dalam pengambilan data parents', err.message);
    } else {
      sleep(500);
      let parents = JSON.parse(strParents);
      fs.readFile(children_file, function(err, strChildren) {
        if(err) {
          console.log('Terjadi kesalahan dalam pengambilan data children', err.message);
        } else {
          sleep(500);
          let children = JSON.parse(strChildren);
          for(let i = 0; i < parents.length; i++) {
            parents[i]['children'] = []
            for(let j = 0; j < children.length; j++) {
              if(parents[i].last_name === children[j].family) {
                parents[i]['children'].push(children[j]);
              }
            }
          }
          console.log(parents);
        }
      }) 
    }
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
