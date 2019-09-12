// const test = require('../../routes/profiles');

// console.log(test);

$(document).ready(function(){
  let team = $('#news-team').html();  
  $.ajax({
          method: "GET",
          type: "json",
          url: 'https://newsapi.org/v2/everything?' +
          'q=' + team +  
          '&language=en' +          
          '&sortBy=relevancy' +
          '&apiKey=308d8f4e99ae4cf8b0fa8709b91948c4'
                    
        }).done(function(response) {  
         
          for (let i = 0; i < response.articles.length; i++){
    $('#div1').append(`<ul class='list-unstyled'><li class='media'><img src='${response.articles[i].urlToImage}'
     width='300' height='200' class='mr-3'><div class='media-body'><a href='${response.articles[i].url}' target='_blank'>
     <h5 class='mt-0 mb-1'>${response.articles[i].title}</h5></a>${response.articles[i].content}</div></li></ul>`)
             }
            })
});

