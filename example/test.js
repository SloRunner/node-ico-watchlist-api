var icoapi = require('../index.js');
icoapi.getAll(function(resp,data){
  if(resp){
    console.log(JSON.stringify(data))
  } else {
    console.log('\nError');
  }
})
