# node-ico-watchlist-api
Nodejs wrapper for icowatchlist.com


[![NPM](https://nodei.co/npm/node-ico-watchlist-api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-ico-watchlist-api/)

## API Implementation
Check examples folder for more info
```javascript
const icowatchlistAPI = require('node-ico-watchlist-api'); // use node-ico-watchlist-api in production
const ico = new icowatchlistAPI()
ico.getFinished(function(resp,data){
  if(resp){
    console.log(JSON.stringify(data))
  } else {
    console.log('\nError');
  }
})

```
All callbacks have the same structure
```javascript
/*
* @return {Boolean} response: result of the call.
* @return {String} json: data returned from icowatchlist.com API in JSON format, if the response is false json is an empty string
*/
callback(response,json);
```

Callbacks:

```javascript
icoapi.getAll()
icoapi.getLive()
icoapi.getUpcoming()
icoapi.getFinished()
```