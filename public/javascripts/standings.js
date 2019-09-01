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
    
  })

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

//   $.ajax({
//     url: 'https://api.football-data.org/v2/competitions/2014/standings',
//     headers: {'X-Auth-Token': '0b56687d125b4f95bb31c75d9ad11a82' }
//     ,
//     type: "GET", /* or type:"GET" or type:"PUT" */
//     dataType: "json",
//     data: {
//     },
//     success: function (response) {
//         console.log(response); 
//         for(let i = 0; i < response['standings'][0]['table'].length; i++){
      
//           $('#Liga').append(`<tr class="table-primary"> <td>${response['standings'][0]['table'][i].position}</td> <td><img style='height:42px; width:42px' 
//     src='${response['standings'][0]['table'][i].team.crestUrl}'> </td>  
          
                                                                      
//                                                               <td>${response['standings'][0]['table'][i].team.name}</td>
//                                                                 <td>${response['standings'][0]['table'][i].playedGames}</td>
//                                                                 <td>${response['standings'][0]['table'][i].won}</td>
//                                                                  <td>${response['standings'][0]['table'][i].draw}</td>
//                                                                  <td>${response['standings'][0]['table'][i].lost}</td>
//                                                                    <td>${response['standings'][0]['table'][i].points}</td></tr>`)
//         }   
//     },
//     error: function () {
//         console.log("error");
//     }
// });

// // Serie A call


//   $.ajax({
//     headers: { 'X-Auth-Token': '0b56687d125b4f95bb31c75d9ad11a82' },
//     url: 'https://api.football-data.org/v2/competitions/2019/standings',
//     dataType: 'json',
//     type: 'GET',
//   }).done(function(response) {
//     console.log(response['standings'])
   
//     for(let i = 0; i < response['standings'][0]['table'].length; i++){
// $("#Serie").append(`<tr class="table-warning"> <td>${response['standings'][0]['table'][i].position}</td> <td><img style='height:42px; width:42px' 
// src='${response['standings'][0]['table'][i].team.crestUrl}'> </td>  
      
                                                                  
//       //                                                          <td>${response['standings'][0]['table'][i].team.name}</td>
//       //                                                          <td>${response['standings'][0]['table'][i].playedGames}</td>
//       //                                                          <td>${response['standings'][0]['table'][i].won}</td>
//       //                                                          <td>${response['standings'][0]['table'][i].draw}</td>
//       //                                                          <td>${response['standings'][0]['table'][i].lost}</td>
//       //                                                          <td>${response['standings'][0]['table'][i].points}</td></tr>`)
//     }
 
//   })


// //Premier call

//   $.ajax({
//     headers: { 'X-Auth-Token': '0b56687d125b4f95bb31c75d9ad11a82' },
//     url: 'https://api.football-data.org/v2/competitions/2021/standings',
//     dataType: 'json',
//     type: 'GET',
//   }).done(function(response) {
//     console.log(response['standings'])
   
//     for(let i = 0; i < response['standings'][0]['table'].length; i++){
// $("#Premier").append(`<tr class="table-danger"> <td>${response['standings'][0]['table'][i].position}</td> <td><img style='height:42px; width:42px' 
// src='${response['standings'][0]['table'][i].team.crestUrl}'> </td>  
      
                                                                  
//       //                                                          <td>${response['standings'][0]['table'][i].team.name}</td>
//       //                                                          <td>${response['standings'][0]['table'][i].playedGames}</td>
//       //                                                          <td>${response['standings'][0]['table'][i].won}</td>
//       //                                                          <td>${response['standings'][0]['table'][i].draw}</td>
//       //                                                          <td>${response['standings'][0]['table'][i].lost}</td>
//       //                                                          <td>${response['standings'][0]['table'][i].points}</td></tr>`)
//     }
 
//   })
// });



// $(document).ready(function(){
  
//   axios({
//     method: 'get',
//     url: 'https://api.football-data.org/v2/competitions/2014/standings',
//     headers: { 'X-Auth-Token': '0b56687d125b4f95bb31c75d9ad11a82' }
    
    
//   })
//     .then(function (response) {
//       console.log(response.data.standings[0]['table'])
//       for(let i = 0; i < response.data.standings[0]['table'].length; i++){
      
//      $('#Liga').append(`<tr class="table-primary"> <td>${response.data.standings[0]['table'][i].position}</td> <td><img style='height:42px; width:42px' 
//   src='${response.data.standings[0]['table'][i].team.crestUrl}'> </td>  
        
                                                                    
//                                                 <td>${response.data.standings[0]['table'][i].team.name}</td>
//                                                  <td>${response.data.standings[0]['table'][i].playedGames}</td>
//                                                  <td>${response.data.standings[0]['table'][i].won}</td>
//                                                  <td>${response.data.standings[0]['table'][i].draw}</td>
//                                                   <td>${response.data.standings[0]['table'][i].lost}</td>
//                                                   <td>${response.data.standings[0]['table'][i].points}</td></tr>`)
//       }  

//     });
  
//     axios({
//       method: 'get',
//       url: 'https://api.football-data.org/v2/competitions/2019/standings',
//       headers: { 'X-Auth-Token': '0b56687d125b4f95bb31c75d9ad11a82' }
      
      
//     })
//       .then(function (response) {
//         console.log(response.data.standings[0]['table'])
//         for(let i = 0; i < response.data.standings[0]['table'].length; i++){
        
//        $('#Serie').append(`<tr class="table-primary"> <td>${response.data.standings[0]['table'][i].position}</td> <td><img style='height:42px; width:42px' 
//     src='${response.data.standings[0]['table'][i].team.crestUrl}'> </td>  
          
                                                                      
//                                                   <td>${response.data.standings[0]['table'][i].team.name}</td>
//                                                    <td>${response.data.standings[0]['table'][i].playedGames}</td>
//                                                    <td>${response.data.standings[0]['table'][i].won}</td>
//                                                    <td>${response.data.standings[0]['table'][i].draw}</td>
//                                                     <td>${response.data.standings[0]['table'][i].lost}</td>
//                                                     <td>${response.data.standings[0]['table'][i].points}</td></tr>`)
//         }  
  
//       });
//       axios({
//         method: 'get',
//         url: 'https://api.football-data.org/v2/competitions/2021/standings',
//         headers: { 'X-Auth-Token': '0b56687d125b4f95bb31c75d9ad11a82' }

        
//       })
//         .then(function (response) {
//           console.log(response.data.standings[0]['table'])
//           for(let i = 0; i < response.data.standings[0]['table'].length; i++){
          
//          $('#Premier').append(`<tr class="table-warning"> <td>${response.data.standings[0]['table'][i].position}</td> <td><img style='height:42px; width:42px' 
//       src='${response.data.standings[0]['table'][i].team.crestUrl}'> </td>  
            
                                                                        
//                                                     <td>${response.data.standings[0]['table'][i].team.name}</td>
//                                                      <td>${response.data.standings[0]['table'][i].playedGames}</td>
//                                                      <td>${response.data.standings[0]['table'][i].won}</td>
//                                                      <td>${response.data.standings[0]['table'][i].draw}</td>
//                                                       <td>${response.data.standings[0]['table'][i].lost}</td>
//                                                       <td>${response.data.standings[0]['table'][i].points}</td></tr>`)
//           }  
    
//         });

// });
// $(document).ready(function(){
// (async () => {
//   const options = {
//     method: 'get',
//     url: 'https://restcountries-v1.p.rapidapi.com/all',
//     headers: {"x-rapidapi-host": "restcountries-v1.p.rapidapi.com", "x-rapidapi-key": "96951967aemsh4023b52bcf4313dp1a6de8jsn6023967ecd9c"}
    
//     }

//   let response = await axios(options) 
                                
//  console.log(response); 

//  for(let i = 0; i < response.data.length; i++){
//  $('#Premier').append(`<tr class="table-warning"> <td>${response.data[i].name}</td> </tr>`)  
                                                 
//      }
// })()
//  })