'use strict'
const request = require('request');

module.exports = class icowatchlistAPI{
  constructor(){
    this.apiurl = 'https://api.icowatchlist.com/public/v1/'
  }
  getAll(callback){
    request(this.apiurl, function (error, response, json) {
      if (!error && response.statusCode == 200) {
        var retjson = JSON.parse(json);
        callback(true,retjson);
      } else {
        callback(false,"");
      }
    });
  }
  getLive(callback){
    request(this.apiurl + 'live', function (error, response, json) {
      if (!error && response.statusCode == 200) {
        var retjson = JSON.parse(json);
        callback(true,retjson);
      } else {
        callback(false,"");
      }
    });
  }
  getUpcoming(callback){
    request(this.apiurl + 'upcoming', function (error, response, json) {
      if (!error && response.statusCode == 200) {
        var retjson = JSON.parse(json);
        callback(true,retjson);
      } else {
        callback(false,"");
      }
    });
  }
  getFinished(callback){
    request(this.apiurl + 'finished', function (error, response, json) {
      if (!error && response.statusCode == 200) {
        var retjson = JSON.parse(json);
        callback(true,retjson);
      } else {
        callback(false,"");
      }
    });
  }
}