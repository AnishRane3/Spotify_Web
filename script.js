console.log("Welcome to spotify");

let extention = ".mp3";
let dir ="audio/";
let playpause = document.getElementById('pp');
let audiofile =["jugnu","raataan_lambiyan","ghana_kasuta"];
var audio = new Audio()
let gif = document.getElementById("gif");
let progress_bar =document.getElementById("song_progressbar");
let like = document.getElementById("like");
let volumeslider = document.getElementById("volume");
volumeslider.addEventListener("mousemove", setvolume);
let mute = document.getElementById("mute");
let today = new Date().getHours();
let welcome = document.getElementById("morning");
let currentsongimg =document.getElementById("currentsongimg");
let currentsongname = document.getElementById("currentsongname");
let main_page_box = document.getElementById("main_page_box");
let library_box = document.getElementById("library_box");
let create_box = document.getElementById("create_box");
let formshowofcp = document.getElementById("formshowofcp");
let useroutputofimg = document.getElementById("output");

function main_show()
{
    library_box.style.display = "none";
    main_page_box.style.display = "block";
    create_box.style.display = "block";
    create_box.style.opacity = 0;
}

function gotocreateplaylist()
{
    create_box.style.display = "block";
    create_box.style.opacity = 1;
    main_page_box.style.display = "none";
    library_box.style.display = "none";
    formshowofcp.style.display = "none";
}

function gotolibrary()
{
    library_box.style.display = "block";
    library_box.style.opacity = 1;
    main_page_box.style.display = "none";
    create_box.style.display = "block";
    create_box.style.opacity = 0;
}

function showcreatewindow()
{
        formshowofcp.style.display = "block";
        formshowofcp.style.opacity = 1;
}
function cutcreatewindow()
{
        formshowofcp.style.display = "none";
        formshowofcp.style.opacity = 0;
}


var loadFile=function showimguseruploaded(event)
{
    useroutputofimg.src =URL.createObjectURL(event.target.files[0])
}


var addRect = function()
{
    var ok = true;
 
    if (ok === true) {
       var div = document.createElement('div');
       div.style.backgroundColor = "white";
       div.style.position = "absolute";
       div.style.left = "50px";
       div.style.top = "50px";
 
       div.className = 'new-div-after-usermake';       
       document.getElementById('library_box')[0].appendChild(div);
    }
 }
 
 document.getElementById("makeplaylist").addEventListener('click', addRect);























let icononbox2_1 =document.getElementById("icononbox2_1");
let icononbox2_2 =document.getElementById("icononbox2_2");
let icononbox2_3 =document.getElementById("icononbox2_3");


icononbox2_1.addEventListener('click',()=>
{
    audio.src = dir+audiofile[0]+extention;
    audio.play();
    currentsongimg.style.backgroundImage = "url('jugnu_cover.jpg')";
    currentsongname.textContent = "Jugnu - Badshaa";
    if(audio.paused || audio.currentTime==0)
    {
        audio.play();
        playpause.classList.remove("fa-play");
        playpause.classList.add("fa-pause");
        gif.style.opacity = 1;
    }
    else
    {
        audio.pause();
        playpause.classList.remove("fa-pause");
        playpause.classList.add("fa-play");
        gif.style.opacity = 0;
    }    


    if(audio.muted)
    {
        audio.muted = true;
        mute.classList.remove("fa-volume-down")
        mute.classList.add("fa-volume-mute")
        volumeslider.value = 0 ;
    }
    else
    {
        audio.muted = false;
        mute.classList.remove("fa-volume-mute")
        mute.classList.add("fa-volume-down")
        volumeslider.value = 20 ;
        
    }
})

icononbox2_2.addEventListener('click',()=>
{
    audio.src = dir+audiofile[1]+extention;
    audio.play();
    currentsongimg.style.backgroundImage = "url('kusukusu_cover.jpg')";
    currentsongname.textContent = "Kusu Kusu - Zahrah S Khan";
    if(audio.paused || audio.currentTime==0)
    {
        audio.play();
        playpause.classList.remove("fa-play");
        playpause.classList.add("fa-pause");
        gif.style.opacity = 1;
    }
    else
    {
        audio.pause();
        playpause.classList.remove("fa-pause");
        playpause.classList.add("fa-play");
        gif.style.opacity = 0;
    }    


    if(audio.muted)
    {
        audio.muted = true;
        mute.classList.remove("fa-volume-down")
        mute.classList.add("fa-volume-mute")
        volumeslider.value = 0 ;
    }
    else
    {
        audio.muted = false;
        mute.classList.remove("fa-volume-mute")
        mute.classList.add("fa-volume-down")
        volumeslider.value = 20 ;
        
    }
})


icononbox2_3.addEventListener('click',()=>
{
    audio.src = dir+audiofile[2]+extention;
    audio.play();
    currentsongimg.style.backgroundImage = "url('GhanaKasoota_cover.jpg')";
    currentsongname.textContent = "Ghana Kasoota - Raftaar";
    if(audio.paused || audio.currentTime==0)
    {
        audio.play();
        playpause.classList.remove("fa-play");
        playpause.classList.add("fa-pause");
        gif.style.opacity = 1;
    }
    else
    {
        audio.pause();
        playpause.classList.remove("fa-pause");
        playpause.classList.add("fa-play");
        gif.style.opacity = 0;
    }    


    if(audio.muted)
    {
        audio.muted = true;
        mute.classList.remove("fa-volume-down")
        mute.classList.add("fa-volume-mute")
        volumeslider.value = 0 ;
    }
    else
    {
        audio.muted = false;
        mute.classList.remove("fa-volume-mute")
        mute.classList.add("fa-volume-down")
        volumeslider.value = 20 ;
        
    }
})




















playpause.addEventListener('click', ()=>
{
    if(audio.paused || audio.currentTime==0)
    {
        audio.play();
        playpause.classList.remove("fa-play");
        playpause.classList.add("fa-pause");
        gif.style.opacity = 1;
    }
    else
    {
        audio.pause();
        playpause.classList.remove("fa-pause");
        playpause.classList.add("fa-play");
        gif.style.opacity = 0;
    }    
})
like.addEventListener('click',()=>
{
    if(like.classList.contains("fa-heart"))
    {
        like.classList.remove("fa-heart")
        like.classList.add("fa-kiss-beam")
    }
    else
    {
        like.classList.remove("fa-kiss-beam")
        like.classList.add("fa-heart")
    }
})

mute.addEventListener("click", ()=>
{
    if(audio.muted)
    {
        audio.muted = false;
        mute.classList.remove("fa-volume-mute")
        mute.classList.add("fa-volume-down")
        volumeslider.value = 20 ;
    }
    else
    {
        audio.muted = true;
        mute.classList.remove("fa-volume-down")
        mute.classList.add("fa-volume-mute")
        volumeslider.value = 0 ;
    }
})

audio.addEventListener('timeupdate',()=>
{
    progress=parseInt((audio.currentTime/audio.duration)*100);
    progress_bar.value=progress
})
progress_bar.addEventListener('change',()=>
{
    audio.currentTime =progress_bar.value * audio.duration/100;
})

function setvolume()
{
    audio.volume = volumeslider.value/100;   
}

function Gan()
{
if(today < 12)
{
    welcome.textContent = "Good Morning"
}
else if(today >= 12 && today <= 17)
{
    welcome.textContent = "Good Afternoon"
}
else if(today > 17 && today == 24)
{
    welcome.textContent = "Good Evening"
}
}