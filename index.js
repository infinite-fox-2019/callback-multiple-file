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
  
  
  fs.readFile(parent_file,function(err,data){
    let arrParent = JSON.parse(data)
    sleep(5000)
    fs.readFile(children_file,function(err,data2){
      let arrChildren = JSON.parse(data2);
      sleep(5000)
      for (let i = 0; i < arrParent.length; i++){
        let arrAnak = [];
        for(let j = 0; j < arrChildren.length;j++){
          if(arrChildren[j].family== arrParent[i].last_name){
            arrAnak.push(arrChildren[j].full_name);
          }
        }
        arrParent[i].children = arrAnak;
        sleep(5000)
      }
      console.log(arrParent)
      
    })
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
