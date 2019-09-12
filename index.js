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
  const parent_data =fs.readFile(parent_file,'utf8',function(errParent,dataParent){
    sleep(5000);
    const children_data = fs.readFile(children_file,'utf8',function(errChild,dataChild){
    sleep(5000);
      dataParent = JSON.parse(dataParent);
      dataChild = JSON.parse(dataChild);
      for (let i = 0; i < dataParent.length; i++) {
        dataParent[i].children = [];
        for (let j = 0; j < dataChild.length; j++) {
          if (dataParent[i].last_name === dataChild[j].family) {
            dataParent[i].children.push(dataChild[j].full_name);
          }
          
        }
      }
      console.log(dataParent);
      
    });
  });

}
// match_data('./parents.json')

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
