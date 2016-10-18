var audio = $("audio")[0];
function sizeControl() {
  var audioWidth = $("audio").width();
  $('#audio-control').css('width', audioWidth+'px');

}
window.onload = sizeControl;
window.onresize =  sizeControl;
loadState();

$("#backward").click(function() {
var audio = $("audio")[0];
  if (!audio.paused){
    audio.currentTime = Math.max(0, audio.currentTime-10);
  }
});
$("#forward").click(function() {
var audio = $("audio")[0];
  if (!audio.paused){
    audio.currentTime = Math.max(0, audio.currentTime+10);
  }
});
$("#arrow-up").click(function() {
var audio = $("audio")[0];
  if (!audio.paused){
    audio.playbackRate += 0.25;
  }
});
$("#arrow-down").click(function() {
  if (!audio.paused){
    audio.playbackRate -= 0.25;
  }
});
$("#load").click(function(){
  if (!$("#link").val()) return;
  audio.src= $("#link").val();
});

function saveState(){
localStorage.setItem("lastPlayed", audio.src);
localStorage.setItem("lastLocation", audio.currentTime);
}
setInterval(saveState, 1000);

function loadState() {
  if (!localStorage.getItem("lastPlayed")|| !localStorage.getItem("lastLocation"))
    return;
  audio.src = localStorage.getItem("lastPlayed");
  audio.play()
  .then(()=>audio.currentTime = localStorage.getItem("lastLocation"))
  .then(()=>audio.pause());
}
