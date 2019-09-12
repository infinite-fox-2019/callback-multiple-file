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
  // let data = fs.readFileSync(parent_file, 'utf8')
  // return data
  fs.readFile('./parents.json', 'utf8', (err, parent)=> {
    parent = JSON.parse(parent)
    sleep(5000)
    fs.readFile('./children.json', 'utf8',(err, children)=>{
      children = JSON.parse(children)
      sleep(5000)
      for(let i=0 ; i<parent.length ; i++){
        let penampung = []
        for(let j=0 ; j<children.length ; j++){
          if(parent[i].last_name == children[j].family){
            penampung.push(children[j].full_name)
          }
        }
        parent[i].children = penampung
      }
      console.log(parent)
    })
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
