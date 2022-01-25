var myVideo=document.getElementById("myVideo");
var play=document.getElementById("play");

const vids=['1.mp4','2.mp4'];
let vidplaying=0;

play.addEventListener("click",playVid);
myVideo.addEventListener('ended', againStart);

function playVid() { 
   myVideo.play();          
   document.getElementById("myVideo").controls = true;
   setTimeout(next,10000);
} 

function plays(){ 
   document.getElementById("myVideo").controls = true;
   myVideo.play();
   started();
}

function next(){
   document.getElementById("myVideo").controls = true;
   nextVideo();
   plays();
}

function nextVideo(){
    if(vidplaying<1){
        vidplaying++;
    }else{
        vidplaying=0;
    }
    myVideo.src=''+vids[vidplaying];
}

function againStart(){
    nextVideo();
    myVideo.currentTime=9;
    myVideo.play();
}








