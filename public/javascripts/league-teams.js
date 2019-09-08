// $(document).ready(function(){
// $.ajax({
//   headers: { 'X-Auth-Token': '0b56687d125b4f95bb31c75d9ad11a82' },
//   url: 'http://api.football-data.org/v2/competitions/2014/teams',
//   dataType: 'json',
//   type: 'GET',
// }).done(function(response) {
//   // do something with the response, e.g. isolate the id of a linked resource   
//   // console.log(response);
//   console.log(response)
//   for(let i = 0; i < response['standings'][0]['table'].length; i++){
      
//     $('#Liga').append(`<tr class="team-player-roster"> <td>${response['standings'][0]['table'][i].position}</td> 
//     <td><img style='height:42px; width:42px'src='${response['standings'][0]['table'][i].team.crestUrl}'> </td>  
    
                                                                
//                                 <td>${response['standings'][0]['table'][i].team.name}</td>
//                                   <td>${response['standings'][0]['table'][i].playedGames}</td>
//                                   <td>${response['standings'][0]['table'][i].won}</td>
//                                     <td>${response['standings'][0]['table'][i].draw}</td>
//                                     <td>${response['standings'][0]['table'][i].lost}</td>
//                                       <td>${response['standings'][0]['table'][i].points}</td></tr>`)
//   }
// });

// });