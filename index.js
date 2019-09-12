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
  const parent_data = fs.readFile(parent_file, "utf8", function(err1, data1){
    sleep(5000)
    const children_data = fs.readFile(children_file, "utf8", function(err2, data2){
      sleep(5000)
      data1 = JSON.parse(data1)
      data2 = JSON.parse(data2)
      for(let i = 0 ; i < data1.length ; i++){
        data1[i]["children"] = []
        for(let j = 0 ; j < data2.length ; j++){
          if (data1[i].last_name == data2[j].family){
            data1[i]["children"].push(data2[j].full_name)
          }
        }
      }
      console.log(data1);
    })
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
