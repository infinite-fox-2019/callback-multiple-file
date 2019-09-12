const fs = require('fs');
const parent_file = './parent.json'
const children_file = './children.json'

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, function(err, dataParentJSON){
    sleep(5000)
    fs.readFile(children_file, function(err,dataChildrenJSON){
      sleep(5000)
      let arrParent = [];
      let arrChildren = []
      let dataParent = JSON.parse(dataParentJSON);
      let dataChildren = JSON.parse(dataChildrenJSON);
    
      for(let i = 0; i<dataParent.length; i++){
        
        arrChildren = []
        for(let j = 0; j<dataChildren.length; j++){
          if(dataParent[i].last_name == dataChildren[j].family){
            arrChildren.push(dataChildren[j].full_name)
          }
        }
        dataParent[i].children = arrChildren;
        arrParent.push(dataParent[i])
      }
      console.log(arrParent);
      
    })
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
