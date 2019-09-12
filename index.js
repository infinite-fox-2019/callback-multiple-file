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
  fs.readFile(parent_file,'utf-8' , (err, parentData) => {    
    sleep(1000)
    console.log('read data parent.')
    sleep(1000)
    console.log('read data parent..')
    sleep(1000)
    console.log('read data parent...')
    sleep(1000)
    console.log('read data parent....')
    sleep(1000)
    console.log('read data parent.....')
    fs.readFile(children_file, 'utf-8', (err,childData) => {
      sleep(1000)
      console.log('read data children.')
      sleep(1000)
      console.log('read data children..')
      sleep(1000)
      console.log('read data children...')
      sleep(1000)
      console.log('read data children....')
      sleep(1000)
      console.log('read data children.....')
      sleep(5000)

      const parent = JSON.parse(parentData)
      const child = JSON.parse (childData)
      
      for(let i = 0; i < parent.length; i++){
        const sameLastName = []
        for(let j = 0; j < child.length;j++){
          if (parent[i].last_name == child[j].family){
            sameLastName.push(child[j])
          }
        }parent[i].children = sameLastName
      }console.log(parent)
    })
  })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
