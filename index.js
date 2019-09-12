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
  fs.readFile(parent_file,function(err,parents){
    let dataParent = JSON.parse(parents)
    for(let i=0; i<dataParent.length; i++){
      dataParent[i]["children"] = []
    }
    fs.readFile(children_file,function(err,childrens){
      let dataChildrens = JSON.parse(childrens)
      for(let i=0; i<dataParent.length; i++){
        for(let j=0; j<dataChildrens.length; j++){
          if(dataChildrens[j].family === dataParent[i].last_name){
            dataParent[i].children.push(dataChildrens[j].full_name)
          }
        }
      }
      console.log(dataParent)
    })
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
