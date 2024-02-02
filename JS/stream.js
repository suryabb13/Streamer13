

$(document).ready(function(){
  
    $('#link').click(function(){
        window.location.href="http://127.0.0.1:5501/html/movie.html";
        localStorage.removeItem('videoData');
    });
    
    var videoData = localStorage.getItem('videoData');

    if (videoData) {
       var videoName=videoData;

       fetch(`http://localhost/mysite/stream.php?videoName=${videoName}`)
       .then(response => {
         if (!response.ok) {
           throw new Error(`HTTP error! Status: ${response.status}`);
         }
         return response.blob();
       })
       .then(blob => {
         // Create a video object URL from the received blob
         const videoUrl = URL.createObjectURL(blob);
      
         // Set the video source to the object URL
         const videoPlayer = document.getElementById("videoPlayer");
         videoPlayer.src = videoUrl;
       })
       .catch(error => console.error("Error:", error));
      
    } else {
      console.error('Video data not found.');
    }
     
    $('#back').click(function(){
        window.location.href="http://127.0.0.1:5501/html/movie.html";
        localStorage.removeItem('videoData');
    });
      if(false){
       
      }
});

    
    