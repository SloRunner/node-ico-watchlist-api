const icowatchlistAPI = require('../index.js'); // use node-ico-watchlist-api in production
const ico = new icowatchlistAPI()
ico.getFinished(function(resp,data){
  if(resp){
    console.log(JSON.stringify(data))
  } else {
    console.log('\nError');
  }
})