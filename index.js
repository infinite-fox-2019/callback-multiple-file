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

  fs.readFile(parent_file,'utf8',function(err,parentData) {
    sleep(5000);
    fs.readFile(children_file,'utf8',function(err,childData) {
      sleep(5000)
      const parentArr = JSON.parse(parentData);
      const childArr = JSON.parse(childData)

      for (let i = 0; i < parentArr.length;i++) {
        let totalChildren = [];
        for (let j = 0 ; j < childArr.length;j++) {
          if (parentArr[i].last_name == childArr[j].family) {
            totalChildren.push(childArr[j])
          }
        }
        parentArr[i].children = totalChildren;
      }
      console.log(parentArr)
    })
  })
}//
match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");



/*























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
  fs.readFile(parent_file, "utf8", (err, parentData) => {
    console.log("Generating parent data...")
    sleep(5000);
    fs.readFile(children_file, "utf8", (err, childrenData) => {
      console.log("Generating children data...")
      sleep(5000);

      const parentArr = JSON.parse(parentData);
      const childrenArr = JSON.parse(childrenData);

      // console.log(parentArr);
      // console.log(childrenArr);
      
      for (let parent of parentArr) {
        const tempArr = [];

        for (let children of childrenArr) {
          if (parent.last_name === children.family) {
            tempArr.push(children.full_name);
          }
        }

        parent.children = tempArr;
      }

      console.log(parentArr);
    });
  });
}

match_data('./parents.json', './children.json');
console.log("Notification : Data sedang diproses !");
*/