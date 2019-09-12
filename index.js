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

  fs.readFile(parent_file, function(err, dataParent){
    fs.readFile(children_file, function(err, dataChild){
      let parentData = JSON.parse(data)
      let childData = JSON.parse(data2)
      for(let i=0; i<parentData.length; i++){
        parentData[i].children = []
        for(let j=0; j<childData.length; j++){
          if(parentData[i].last_name === childData[j].family){
            parentData[i].children.push(childData[j].full_name)

          }
        }
        sleep(5000)
        console.log(parentData[i])
        sleep(5000)
      }
    })
  })



  

  // console.log(parentData)
  // sleep(5000)
  // console.log(childData)
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
