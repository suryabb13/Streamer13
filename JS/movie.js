

$(document).ready(function(){
  
    $('#home').click(function(){
        window.location.href="http://127.0.0.1:5501/html/index.html";
    });

    $('#searchbtn').click(function() {
        var searchTerm = $('#search').val().toLowerCase();
        $('.searching').each(function() {
          var divSearchTerm = $(this).data('search-term').toLowerCase();
          $(this).toggle(divSearchTerm.includes(searchTerm));
        });
      });
    
    $('#videoimg, #videoname').click(function() {
        var dat = $(this).data('value');
        console.log(dat);

        var videoName = $(this).data('value');

        localStorage.setItem('videoData', videoName);
        window.location.href="http://127.0.0.1:5501/html/stream.html";
    
      
    });
    
    
});

    
    