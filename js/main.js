var video = $("video")[0];
function sizeControl() {
  var videoWidth = $("video").width();
  $('#video-control').css('width', videoWidth+'px');

}
window.onload = sizeControl;
window.onresize =  sizeControl;
loadState();

$("#backward").click(function() {
var video = $("video")[0];
  if (!video.paused){
    video.currentTime = Math.max(0, video.currentTime-10);
  }
});
$("#forward").click(function() {
var video = $("video")[0];
  if (!video.paused){
    video.currentTime = Math.max(0, video.currentTime+10);
  }
});
$("#arrow-up").click(function() {
var audio = $("video")[0];
  if (!video.paused){
    video.playbackRate += 0.25;
  }
});
$("#arrow-down").click(function() {
  if (!video.paused){
    video.playbackRate -= 0.25;
  }
});
$("#load").click(function(){
  if (!$("#link").val()) return;
  video.src= $("#link").val();
});

function saveState(){
localStorage.setItem("lastPlayed", video.src);
localStorage.setItem("lastLocation", video.currentTime);
}
setInterval(saveState, 1000);

function loadState() {
  if (!localStorage.getItem("lastPlayed")|| !localStorage.getItem("lastLocation"))
    return;
  video.src = localStorage.getItem("lastPlayed");
  video.play()
  .then(()=>video.currentTime = localStorage.getItem("lastLocation"))
  .then(()=>video.pause());
}
