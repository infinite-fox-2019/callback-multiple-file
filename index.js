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
  fs.readFile(parent_file,
    function(err,data){
      let dataParent = JSON.parse(data)
      for(let i = 0 ; i < dataParent.length;i++){
        dataParent[i]['children'] = []
        
        fs.readFile(children_file,
          function(err,data){
          let dataChildren = JSON.parse(data)
          for(let j = 0 ; j < dataChildren.length; j++){
            if (dataParent[i].last_name == dataChildren[j].family) {
              dataParent[i]['children'].push(dataChildren[j].full_name)
            }
          }
          console.log(dataParent[i]);
          sleep(5000)
        })
      }
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
