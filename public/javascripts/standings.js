//LaLiga call
$(document).ready(function(){
  
  $.ajax({
    header: {"Access-Control-Allow-Origin": "*"},
    header: {'Access-Control-Allow-Methods': "GET"},
    method: "GET",
    type: "json",
    url: 'https://api.football-data.org/v2/competitions/2014/standings',
    headers: {'X-Auth-Token': '0b56687d125b4f95bb31c75d9ad11a82' },
        
  }).done(function(response) {
       console.log(response);
    for(let i = 0; i < response['standings'][0]['table'].length; i++){
      
      $('#Liga').append(`<tr class="table-primary"> <td>${response['standings'][0]['table'][i].position}</td> <td><img style='height:42px; width:42px' 
src='${response['standings'][0]['table'][i].team.crestUrl}'> </td>  
      
                                                                  
                                  <td>${response['standings'][0]['table'][i].team.name}</td>
                                    <td>${response['standings'][0]['table'][i].playedGames}</td>
                                    <td>${response['standings'][0]['table'][i].won}</td>
                                      <td>${response['standings'][0]['table'][i].draw}</td>
                                      <td>${response['standings'][0]['table'][i].lost}</td>
                                        <td>${response['standings'][0]['table'][i].points}</td></tr>`)
    }
    
  });

  $.ajax({
    header: {"Access-Control-Allow-Origin": "*"},
    header: {'Access-Control-Allow-Methods': "GET"},
    method: "GET",
    type: "json",
    url: 'https://api.football-data.org/v2/competitions/2019/standings',
    headers: {'X-Auth-Token': '0b56687d125b4f95bb31c75d9ad11a82' },
        
  }).done(function(response) {
       
    for(let i = 0; i < response['standings'][0]['table'].length; i++){
      
      $('#Serie').append(`<tr class="table-warning"> <td>${response['standings'][0]['table'][i].position}</td> <td><img style='height:42px; width:42px' 
src='${response['standings'][0]['table'][i].team.crestUrl}'> </td>  
      
                                                                  
                                                          <td>${response['standings'][0]['table'][i].team.name}</td>
                                                            <td>${response['standings'][0]['table'][i].playedGames}</td>
                                                            <td>${response['standings'][0]['table'][i].won}</td>
                                                             <td>${response['standings'][0]['table'][i].draw}</td>
                                                             <td>${response['standings'][0]['table'][i].lost}</td>
                                                               <td>${response['standings'][0]['table'][i].points}</td></tr>`)
    }
    
  })
  $.ajax({
    header: {"Access-Control-Allow-Origin": "*"},
    header: {'Access-Control-Allow-Methods': "GET"},
    method: "GET",
    type: "json",
    url: 'https://api.football-data.org/v2/competitions/2021/standings',
    headers: {'X-Auth-Token': '0b56687d125b4f95bb31c75d9ad11a82' },
        
  }).done(function(response) {
       
    for(let i = 0; i < response['standings'][0]['table'].length; i++){
      
      $('#Premier').append(`<tr class="table-danger"> <td>${response['standings'][0]['table'][i].position}</td> <td><img style='height:42px; width:42px' 
src='${response['standings'][0]['table'][i].team.crestUrl}'> </td>  
      
                                                                  
                                                          <td>${response['standings'][0]['table'][i].team.name}</td>
                                                            <td>${response['standings'][0]['table'][i].playedGames}</td>
                                                            <td>${response['standings'][0]['table'][i].won}</td>
                                                             <td>${response['standings'][0]['table'][i].draw}</td>
                                                             <td>${response['standings'][0]['table'][i].lost}</td>
                                                               <td>${response['standings'][0]['table'][i].points}</td></tr>`)
    }
    
  })
})