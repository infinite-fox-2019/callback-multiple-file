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
  
  fs.readFile(parent_file,'utf8', function(err, parent_file){
    fs.readFile(children_file,'utf8', function(err, children_file){
      parent_file = JSON.parse(parent_file)
      children_file = JSON.parse(children_file)
      for (let i=0; i<parent_file.length; i++){
        parent_file[i].children = []
        for(let j=0; j<children_file.length; j++){
          if(parent_file[i].last_name === children_file[j].family){
            parent_file[i].children.push(children_file[j].full_name)
          }
        }
        console.log(parent_file);
        sleep(5000)
      }
    })
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
