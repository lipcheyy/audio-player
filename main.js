const playPause=document.querySelector(".play-pause");
const audio=document.querySelector('.audio');
const forward=document.querySelector('.forward');
const backward=document.querySelector('.backward');
const songs=["Beyonce.mp3","DuaLipa.mp3"]
let nowPlaying=0;

audio.src="assets/audio/" + songs[nowPlaying];
function play(){
    audio.play();
    playPause.src="assets/svg/pause.png";
    playPause.onclick=pause;
}
function pause(){
    audio.pause();
    playPause.src="assets/svg/play.png";
    playPause.onclick=play;
}
function nextSong(){
    nowPlaying=nowPlaying+1;
    if(nowPlaying>1){
        nowPlaying=0;
    }
    audio.src="assets/audio/" + songs[nowPlaying];
    play();
}
function previousSong(){
    nowPlaying=nowPlaying-1;
    if(nowPlaying<0){
        nowPlaying=1;
    }
    audio.src="assets/audio/" + songs[nowPlaying];
    play();
}
playPause.onclick=play;
forward.onclick=nextSong;
backward.onclick=previousSong;

