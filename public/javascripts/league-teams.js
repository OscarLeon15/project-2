$(document).ready(function(){
$.ajax({
  headers: { 'X-Auth-Token': 'process.env.TOKEN' },
  url: 'http://api.football-data.org/v2/competitions/2014/teams',
  dataType: 'json',
  type: 'GET',
}).done(function(response) {
  // do something with the response, e.g. isolate the id of a linked resource   
  console.log(response);
});

});