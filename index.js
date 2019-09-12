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
  fs.readFile(parent_file, 'utf8', function(err, parentData){
    sleep(5000)
    fs.readFile(children_file, 'utf8', function(err, childData){
      sleep(5000)
      let dataParent = JSON.parse(parentData)
      let dataChild = JSON.parse(childData)
      
      for(let i= 0; i < dataParent.length; i++){
        let tempDataChild = []
        for(let j = 0; j < dataChild.length; j++){
          if(dataParent[i].last_name == dataChild[j].family){
            tempDataChild.push(dataChild[j].full_name)
          }
        }
        dataParent[i].children = tempDataChild
      }
      console.log(dataParent);
    })
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
