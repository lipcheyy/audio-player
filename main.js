const playPause=document.querySelector(".play-pause");
audio=document.querySelector('.audio');
forward=document.querySelector('.forward');
backward=document.querySelector('.backward');
coverImg=document.querySelector('.coverImg');
background=document.querySelector('.background');
singer=document.querySelector('.singer');
progressContainer=document.querySelector('.progress-bar');
song_Name=document.querySelector(".songname");
progressbar=document.querySelector('.progressbar')
const songs=["Beyonce.mp3","DuaLipa.mp3"];
const covers=["cover1.png", "cover2.png"]
const singerName=["Beyonce","Dua Lipa"];
const songName=["Don`t Hurt Yoursef", "Dont Start Now"];
let nowPlaying=0;
audio.addEventListener("timeupdate", progress);
progressContainer.addEventListener('click',currentProgress)
audio.src="assets/audio/" + songs[nowPlaying];
// Функция для начала проигрывания песни
function play(){
    audio.play();
    playPause.src="assets/svg/pause.png";
    playPause.onclick=pause;
}// Пауза
function pause(){
    audio.pause();
    playPause.src="assets/svg/play.png";
    playPause.onclick=play;
}// Кнопка "следующая песня"
function nextSong(){
    nowPlaying=nowPlaying+1;
    if(nowPlaying>1){
        nowPlaying=0;
    }
    singer.innerHTML= singerName[nowPlaying];
    song_Name.innerHTML=songName[nowPlaying];
    coverImg.src="assets/img/"+covers[nowPlaying];
    background.src="assets/img/"+covers[nowPlaying];
    audio.src="assets/audio/" + songs[nowPlaying];
    play();
}// Кнопка "предыдущая песня"
function previousSong(){
    nowPlaying=nowPlaying-1;
    if(nowPlaying<0){
        nowPlaying=1;
    }
    singer.innerHTML= singerName[nowPlaying];
    song_Name.innerHTML=songName[nowPlaying];
    background.src="assets/img/"+covers[nowPlaying];
    coverImg.src="assets/img/"+covers[nowPlaying];
    audio.src="assets/audio/" + songs[nowPlaying];
    play();
}
function progress(start){
    const{duration,currentTime}=start.srcElement;
    const thisProgres=(currentTime/duration)*100;
    progressbar.style.width=`${thisProgres}%`
}
//Перемотка песни
function currentProgress(e){
    width=this.clientWidth;
    clickHere=e.offsetX;
    dur=audio.duration;
    audio.currentTime=(clickHere/width)*dur;
}
//Автопроигрывание
audio.addEventListener('ended', nextSong)
playPause.onclick=play;
forward.onclick=nextSong;
backward.onclick=previousSong;

