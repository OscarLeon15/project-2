$(document).ready(function(){
    $.ajax({
      method: "GET",
      type: "json",
      url: 'https://newsapi.org/v2/everything?' +
      'q=Real Madrid CF&' +
      'from=2019-09-04&' +
      'sortBy=popularity&' +
      'apiKey=308d8f4e99ae4cf8b0fa8709b91948c4'
                
    }).done(function(response) {  
      console.log(response.articles);
      for (let i = 0; i < 3; i++){
$('#blah').append(`<ul class='list-unstyled'><li class='media'><img src='${response.articles[i].urlToImage}' width='300' height='200' class='mr-3'><div class='media-body'><a href='${response.articles[i].url}'><h5 class='mt-0 mb-1'>${response.articles[i].title}</h5></a>${response.articles[i].content}</div></li></ul>`)
   
        
      }
    
    })
  })