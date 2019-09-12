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
      let dataList = JSON.parse(data)
      // console.log(dataList);
      for(let i = 0 ; i < dataList.length;i++){
        dataList[i]['children'] = []
        fs.readFile(children_file,
          function(err,data1){
            let dataChild = JSON.parse(data1)
            // console.log(dataList);
            for(let j = 0 ; j < dataChild.length; j++){
              if (dataChild[j].family == dataList[i].last_name) {
                dataList[i]['children'].push(dataChild[j].full_name)
              }
            }
            console.log(dataList);
            sleep(500)
        })
      }
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
