
$(document).ready(function(){
  
  $.ajax({
    header: {"Access-Control-Allow-Origin": "*"},
    header: {'Access-Control-Allow-Methods': "GET"},
    method: "GET",
    type: "json",
    url: 'https://api.football-data.org/v2/competitions/PD/scorers',
    headers: {'X-Auth-Token': '0b56687d125b4f95bb31c75d9ad11a82' },
        
  }).done(function(response) {
      
       for(let i = 0; i < response['scorers'].length; i++){
      
        $('#scorers_Liga').append(`<tr class="table-primary"> 
        <td>${response['scorers'][i].player.name}</td> 
        <td>${response['scorers'][i].team.name}</td>
        <td>${response['scorers'][i].player.nationality}</td>
        <td>${response['scorers'][i].player.position}</td>
        <td>${response['scorers'][i].numberOfGoals}</td>       
        </tr>`)
  }
  })

  $.ajax({
    header: {"Access-Control-Allow-Origin": "*"},
    header: {'Access-Control-Allow-Methods': "GET"},
    method: "GET",
    type: "json",
    url: 'https://api.football-data.org/v2/competitions/SA/scorers',
    headers: {'X-Auth-Token': '0b56687d125b4f95bb31c75d9ad11a82' },
        
  }).done(function(response) {
       
       for(let i = 0; i < response['scorers'].length; i++){
      
        $('#scorers_Serie').append(`<tr class="table-warning"> 
        <td>${response['scorers'][i].player.name}</td> 
        <td>${response['scorers'][i].team.name}</td>
        <td>${response['scorers'][i].player.nationality}</td>
        <td>${response['scorers'][i].player.position}</td>
        <td>${response['scorers'][i].numberOfGoals}</td>       
        </tr>`)
  }
  })

  $.ajax({
    header: {"Access-Control-Allow-Origin": "*"},
    header: {'Access-Control-Allow-Methods': "GET"},
    method: "GET",
    type: "json",
    url: 'https://api.football-data.org/v2/competitions/PL/scorers',
    headers: {'X-Auth-Token': '0b56687d125b4f95bb31c75d9ad11a82' },
        
  }).done(function(response) {
       
       for(let i = 0; i < response['scorers'].length; i++){
      
        $('#scorers_Premier').append(`<tr class="table-danger"> 
        <td>${response['scorers'][i].player.name}</td> 
        <td>${response['scorers'][i].team.name}</td>
        <td>${response['scorers'][i].player.nationality}</td>
        <td>${response['scorers'][i].player.position}</td>
        <td>${response['scorers'][i].numberOfGoals}</td>       
        </tr>`)
  }
  })
})