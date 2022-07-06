 

function sort()
{
   let filter=document.getElementById('songName').value.toUpperCase();
   let get=document.querySelectorAll('.R_content .music-block ');
   for(var i=0;i<get.length;i++)
   { 
     let song=get[i].querySelector('span h1').textContent.toUpperCase();
     if(song.indexOf(filter)>-1)
     {
       get[i].style.display='';
     }
     else
     {
        get[i].style.display='none' ;
     }

   }
}
let songIndex = 0;
let songs = [
  {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
  {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
  {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
  {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
  {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
  {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
  {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
 
]

//audioElement.play();
let audioElement=new Audio("songs/1.mp3");
let elements=document.getElementsByClassName('songItemPlay');

function pauseAll()
{ 
  for(var i=0;i<elements.length;i++ )
  {
    
      elements[i].classList.add('zmdi-play-circle');
    elements[i].classList.remove('zmdi-pause-circle');}
  
} 

for(var i=0;i<elements.length;i++ )
{
  elements[i].addEventListener('click',play_pause)}
  
  function play_pause(e)
    {
    if(e.target.classList.contains('zmdi-play-circle'))
    { pauseAll();
      console.log("pausing the circle");
      e.target.classList.remove('zmdi-play-circle');
      e.target.classList.add('zmdi-pause-circle');
    }
    else
    {
      console.log("playing the circle");
      e.target.classList.add('zmdi-play-circle');
      e.target.classList.remove('zmdi-pause-circle');
    }
    songIndex = parseInt(e.target.id);
    console.log(songIndex)
    audioElement.src = `songs/${songIndex+1}.mp3`;
    if(e.target.classList.contains('zmdi-pause-circle'))
    {audioElement.play();}
    else{audioElement.pause();}
  }
  





