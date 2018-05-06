var request = require('request');
var apiurl = 'https://api.icowatchlist.com/public/v1/';

exports.getAll = function(callback){
  request(apiurl, function (error, response, json) {
    if (!error && response.statusCode == 200) {
      var retjson = JSON.parse(json);
      callback(true,retjson);
    } else {
      callback(false,"");
    }
  });
};

exports.getLive = function(callback){
  request(apiurl + 'live', function (error, response, json) {
    if (!error && response.statusCode == 200) {
      var retjson = JSON.parse(json);
      callback(true,retjson);
    } else {
      callback(false,"");
    }
  });
};

exports.getUpcoming = function(callback){
  request(apiurl + 'upcoming', function (error, response, json) {
    if (!error && response.statusCode == 200) {
      var retjson = JSON.parse(json);
      callback(true,retjson);
    } else {
      callback(false,"");
    }
  });
};

exports.getFinished = function(callback){
  request(apiurl + 'finished', function (error, response, json) {
    if (!error && response.statusCode == 200) {
      var retjson = JSON.parse(json);
      callback(true,retjson);
    } else {
      callback(false,"");
    }
  });
};