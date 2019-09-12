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
    fs.readFile ( parent_file , 'utf8' , function ( err , parents ) {
      let parseParents = JSON.parse ( parents );
      for ( let i=0 ; i<parseParents.length; i++ ) {
        fs.readFile ( children_file , 'utf8' , function ( err , childrens ) {
          parseParents[i]['children'] = [];
          let parseChildrens = JSON.parse ( childrens );
          for ( let j=0; j<parseChildrens.length; j++ ) {
            if ( parseChildrens[j].family == parseParents[i].last_name ) {
              parseParents[i]['children'].push( parseChildrens[j].full_name );
            }
          }
          console.log ( parseParents );
          sleep(200);
        })
      }
    })
}

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");