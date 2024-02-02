<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


$videoName = $_GET["videoName"];

// $videoName="new.mkv";

$videoPath = "/opt/lampp/htdocs/mysite/video/" . $videoName;
$fileExtension = strtolower(pathinfo($videoPath, PATHINFO_EXTENSION));

if (file_exists($videoPath)) {
  $fileSize = filesize($videoPath);

  // header("Content-Type: video/mp4");
 
  switch ($fileExtension) {
    case 'mp4':
        header('Content-Type: video/mp4');
        break;
    case 'mkv':
        header('Content-Type: video/x-matroska');
        break;
    default:
        // Add more cases for other video formats if needed
        header('Content-Type: application/octet-stream');
}
  header("Content-Length: " . $fileSize);
  header("Content-Disposition: inline; filename=" . $videoName);

  readfile($videoPath);
} else {
  header("HTTP/1.1 404 Not Found");
  echo "Video not found.";
}



?>