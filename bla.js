var express = require('express');
var app = express();
var request = require('request');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/competitions', function(req, res){
  request({
      method: 'GET',
      uri: `https://api.football-data.org/v4/competitions/`,
      headers: {
        "X-Auth-Token": "09c05f78fa8a44f8a2343532c1945ee6",
        "Accept-Encoding": "",
      }
    }, function (error, response, body){
      if(!error && response.statusCode == 200){
        res.end(body);
      }
   })
});

app.get('/competitions/:id/:action', function(req, res){
    request({
        method: 'GET',
        uri: `https://api.football-data.org/v4/competitions/${req.params.id}/${req.params.action}`,
        headers: {
          "X-Auth-Token": "09c05f78fa8a44f8a2343532c1945ee6",
          "Accept-Encoding": "",
        }
      }, function (error, response, body){
        if(!error && response.statusCode == 200){
          res.end(body);
        }
     })
  });

  app.get('/teams/:id', function(req, res){
    request({
        method: 'GET',
        uri: `https://api.football-data.org/v4/teams/${req.params.id}`,
        headers: {
          "X-Auth-Token": "09c05f78fa8a44f8a2343532c1945ee6",
          "Accept-Encoding": "",
        }
      }, function (error, response, body){
        if(!error && response.statusCode == 200){
          res.end(body);
        }
     })
  });

  app.get('/teams/:id/matches', function(req, res){
    request({
        method: 'GET',
        uri: `https://api.football-data.org/v4/teams/${req.params.id}/matches`,
        headers: {
          "X-Auth-Token": "09c05f78fa8a44f8a2343532c1945ee6",
          "Accept-Encoding": "",
        }
      }, function (error, response, body){
        if(!error && response.statusCode == 200){
          res.end(body);
        }
     })
  });

app.listen(3000);