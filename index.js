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
  
  fs.readFile('./parents.json',function(err,dataOrtu){
    const tampungOrtu = JSON.parse(dataOrtu);
    
    for(let i = 0; i < tampungOrtu.length; i++){
      tampungOrtu[i]['children'] = [];
    }

    fs.readFile(children_file, function(err,dataAnak){
      
      const tampungAnak = JSON.parse(dataAnak)
      for(let i = 0; i < tampungOrtu.length; i++){
        for(let j = 0; j < tampungAnak.length; j++){
          if(tampungAnak[j].family == tampungOrtu[i]['last_name']){
            tampungOrtu[i]['children'].push(tampungAnak[j]['full_name'])
          }
        }
        console.log(tampungOrtu[i]);
        sleep(1000)
      }
    })
  })
}

match_data('./parents.json', './children.json')
console.log("\nNotification : Data sedang diproses !\n");
