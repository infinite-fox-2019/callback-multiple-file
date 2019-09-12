const fs = require("fs");

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

function match_data(parent_file, children_file) {
  fs.readFile(parent_file, function(err, data) {
    let parent_data = JSON.parse(data);
    sleep(5000);
    fs.readFile(children_file, function(err, data2) {
      let children_data = JSON.parse(data2);
      for (let i = 0; i < parent_data.length; i++) {
        let child =[]
        for (let j = 0; j < children_data.length; j++) {
          if (parent_data[i].last_name == children_data[j].family){
            child.push(children_data[j].full_name)
          }
        }
        parent_data[i].children = child
      }
      console.log(parent_data)
    });
  });
}

match_data("./parents.json", "./children.json");
console.log("Notification : Data sedang diproses !");
