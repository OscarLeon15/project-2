$(document).ready(function(){
$.ajax({
  headers: { 'X-Auth-Token': '0b56687d125b4f95bb31c75d9ad11a82' },
  url: 'http://api.football-data.org/v2/competitions/2014/teams',
  dataType: 'json',
  type: 'GET',
}).done(function(response) {
  // do something with the response, e.g. isolate the id of a linked resource   
  console.log(response);
});

});