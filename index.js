'use strict'
const request = require('request');

var browser = request.defaults({
  headers: {'User-Agent': 'The Botfather NodeJS module (https://nodei.co/npm/node-ico-watchlist-api/)'}
})

module.exports = class icowatchlistAPI{
  constructor(){
    this.apiurl = 'https://api.icowatchlist.com/public/v1/'
  }
  getAll(callback){
    browser(this.apiurl, function (error, response, json) {
      if (!error && response.statusCode == 200) {
        var retjson = JSON.parse(json);
        callback(true,retjson);
      } else {
        callback(false,"");
      }
    });
  }
  getLive(callback){
    browser(this.apiurl + 'live', function (error, response, json) {
      if (!error && response.statusCode == 200) {
        var retjson = JSON.parse(json);
        callback(true,retjson);
      } else {
        callback(false,"");
      }
    });
  }
  getUpcoming(callback){
    browser(this.apiurl + 'upcoming', function (error, response, json) {
      if (!error && response.statusCode == 200) {
        var retjson = JSON.parse(json);
        callback(true,retjson);
      } else {
        callback(false,"");
      }
    });
  }
  getFinished(callback){
    browser(this.apiurl + 'finished', function (error, response, json) {
      if (!error && response.statusCode == 200) {
        var retjson = JSON.parse(json);
        callback(true,retjson);
      } else {
        callback(false,"");
      }
    });
  }
}