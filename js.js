


const different = [
  "drake","linkin park","metallica","queen","bruno mars","2pac","u2","rihanna","50-cent","eminem","future","biggie"
]
let arrayOfRandomArtists = []

const artists = (arrayOfRandomArtists) => {
  
    for( let i = 0; i<4; i++){
      let random = Math.floor( Math.random()*different.length )
      arrayOfRandomArtists.push(different[random])
    }
    return (arrayOfRandomArtists)
}
artists(arrayOfRandomArtists)

   


const responsiveRecent = function(){
     let a = document.querySelector("#main-section-recent div:nth-child(6)")
     a.classList.add("hidden-sm", "hidden-md", "hidden-l", "hidden-xl") 

     let b = document.querySelector("#main-section-recent div:nth-child(5)")
     b.classList.add("hidden-sm", "hidden-md", "hidden-l", "hidden-xl") 

     let c = document.querySelector("#main-section-recent div:nth-child(4)")
     c.classList.add("hidden-sm", "hidden-md", "hidden-l")

     let d = document.querySelector("#main-section-recent div:nth-child(3)")
     d.classList.add("hidden-sm", "hidden-md") 
      
     let f = document.querySelector("#main-section-recent div:nth-child(2)")
     f.classList.add("hidden-sm") 
   
}
const responsiveToTry = function(){
     let a = document.querySelector("#main-section-to-try div:nth-child(6)")
     a.classList.add("hidden-sm", "hidden-md", "hidden-l", "hidden-xl") 

     let b = document.querySelector("#main-section-to-try div:nth-child(5)")
     b.classList.add("hidden-sm", "hidden-md", "hidden-l", "hidden-xl") 

     let c = document.querySelector("#main-section-to-try div:nth-child(4)")
     c.classList.add("hidden-sm", "hidden-md", "hidden-l")

     let d = document.querySelector("#main-section-to-try div:nth-child(3)")
     d.classList.add("hidden-sm", "hidden-md") 
      
     let f = document.querySelector("#main-section-to-try div:nth-child(2)")
     f.classList.add("hidden-sm") 
   
}



const recentCardDisplay = (arrayOfRandomArtists) => {
    let container = document.getElementById("main-section-recent")  

    arrayOfRandomArtists.forEach(element => {
     let x = Math.floor( Math.random()*24 )
      fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${element}`)
      .then(response=>response.json())
      .then(body=>{
        const inhalt = `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 ">
          <a href="artist.html">
            <div class="card-main pb-1">
              <div class="d-flex justify-content-center">
                <div class="d-flex justify-content-center">
                  <div class="imagewrapper">
                    <div class="son">
                      <img class="px-3 py-3 card-image-main" src="${body.data[x].album.cover_medium}" alt="">
                    </div>
                    <div class="son2 d-flex justify-content-end align-items-end">
                      <div class="playbutton mb-3 mr-3">
                        <div class="arrow-right"></div>
                      </div>
                    </div>
                  </div>
                </div>
        
              </div>
              <h6 class="px-2 my-1 card-title">${body.data[x].title_short}</h6>
              <p class="card-description-main my-2 px-2 ">${body.data[x].artist.name}</p>
            </div>
          </a>
        </div>
          `
        container.innerHTML +=inhalt 
      })
    });
}


const toTryCardDisplay = function(arrayOfRandomArtists){
    let container = document.getElementById("main-section-to-try")

    arrayOfRandomArtists.forEach(element => {
     let x = Math.floor( Math.random()*24 )
      fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${element}`)
      .then(response=>response.json())
      .then(body=>{
        const inhalt = `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 ">
          <a href="artist.html">
            <div class="card-main pb-1">
              <div class="d-flex justify-content-center">
                <div class="d-flex justify-content-center">
                  <div class="imagewrapper">
                    <div class="son">
                      <img class="px-3 py-3 card-image-main" src="${body.data[x].album.cover_medium}" alt="">
                    </div>
                    <div class="son2 d-flex justify-content-end align-items-end">
                      <div class="playbutton mb-3 mr-3">
                        <div class="arrow-right"></div>
                      </div>
                    </div>
                  </div>
                </div>
        
              </div>
              <h6 class="px-2 my-1 card-title">${body.data[x].title_short}</h6>
              <a href="./artist.html">
              <p class="card-description-main my-2 px-2 ">${body.data[x].artist.name}</p>
              </a>
            </div>
          </a>
        </div>
          `
        container.innerHTML +=inhalt 
      })
    });

}

const display = function () {

            let storedName = localStorage.getItem("name")
            let user = document.getElementById("username")
            const inhalt = `
         <span>${storedName}</span>
             `

            user.innerHTML += inhalt

            
        }
        

 
function store() {

    var name = document.getElementById('name');
    localStorage.setItem('name', name.value);
  
}

display()


const id = new URLSearchParams(window.location.search).get("artistId") 

fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" +id)
.then(response => response.json())
.then(body=>{
  let picture = document.querySelector(".artist-main-container ")
  picture.style.backgroundImage= `url(${body.picture_big})`
  let artistName = document.querySelector("#artist-name-main")
  artistName.innerText = body.name
  fetch(`${body.tracklist}`)
  .then(response => response.json())
  .then(body2 =>{
    let container = document.querySelector("#play-list-container")
      for (i = 0; i < body2.data.length; i++) {
        console.log(body2)
    playListHtml = `        <div class="row align-items-center py-3">
                                <div class="col-9 col-sm-6 artist-main-songs-list">
                                    <span class="pr-2">${i + 1}</span>
                                    <span class="d-none" id="b${i}" onclick="getMeSong(event)"><i class="bi bi-play-fill" id="i${i}"></i></span>
                                    <img src="${
                                      body2.data[i].album.cover_small
                                    }" alt="">
                                    <span>${body2.data[i].title_short}</span>
                                </div>
                                <div class="col-3 d-none d-md-block artist-main-songs-right">
                                    <span>456</span>
                                </div>
                                <div class="col-6 col-md-3 d-none d-sm-block text-right  text-sm-center artist-main-songs-right">
                                    <!-- <span><i class="bi bi-heart"></i></span> -->
                                    <span class="ml-3">123
                                      
                                    </span>
                                </div>
                            </div>`;
        container.innerHTML += playListHtml;

    }

  })

})


const loadPlayList = function () {
    
    for (i = 0; i < playlist.length; i++) {
    playListHtml = `        <div class="row align-items-center py-3">
                                <div class="col-9 col-sm-6 artist-main-songs-list">
                                    <span class="pr-2">${i + 1}</span>
                                    <span class="d-none" id="b${i}" onclick="getMeSong(event)"><i class="bi bi-play-fill" id="i${i}"></i></span>
                                    <img src="${
                                      playlist[i].cover_image
                                    }" alt="">
                                    <span>${playlist[i].song}</span>
                                </div>
                                <div class="col-3 d-none d-md-block artist-main-songs-right">
                                    <span>${playlist[i].listens}</span>
                                </div>
                                <div class="col-6 col-md-3 d-none d-sm-block text-right  text-sm-center artist-main-songs-right">
                                    <!-- <span><i class="bi bi-heart"></i></span> -->
                                    <span class="ml-3">${
                                      playlist[i].duration
                                    }</span>
                                </div>
                            </div>`;
        playListContainer.innerHTML += playListHtml;

    }
}








const sectionToOBserve = document.getElementById("under-hero-section");
const buttonsToChange = document.getElementsByClassName(
  "artist-main-play-button"
);

const navBarToToggle = document.querySelector(".nav-wrapper-inner");
const navTextToggle = document.querySelector(".nav-text-toggling");



const options = {
    root: null,
    threshold: 0.8,
    rootMargin: "-150px",
 };

const observerNav = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
       
        if (!entry.isIntersecting) {
          buttonsToChange[0].classList.remove("d-none");
          buttonsToChange[1].classList.add("d-none");
          navBarToToggle.classList.add("nav-background-toggle-artist");
          navTextToggle.classList.remove("d-none");
          return;
        }
        
        
        if (entry.isIntersecting) {
            buttonsToChange[0].classList.add("d-none");
            buttonsToChange[1].classList.remove("d-none");
            navBarToToggle.classList.remove("nav-background-toggle-artist");
            navTextToggle.classList.add("d-none");            
        }
    });
}, options);

observerNav.observe(sectionToOBserve);


/* INTERSECTION OBSERVER END */

/* MOVE BAR START */


/* PLAYLIST ARRAY OF OBJECTS */

// const playlist = [
//   {
//     artist: "Foo Fighters",
//     song: "Everlong",
//     duration: "4:10",
//     cover_image: "Assests/tile1.jpg",
//     listens: "532 068 244",
//   },
//   {
//     artist: "Foo Fighters",
//     song: "The Pretender",
//     duration: "4:29",
//     cover_image: "Assests/tile2.jpg",
//     listens: "482 032 144",
//   },
//   {
//     artist: "Foo Fighters",
//     song: "Best of You",
//     duration: "4:15",
//     cover_image: "Assests/tile3.jpg",
//     listens: "412 162 232",
//   },
//   {
//     artist: "Foo Fighters",
//     song: "Learn to Fly",
//     duration: "3:55",
//     cover_image: "Assests/tile4.jpg",
//     listens: "337 051 124",
//   },
//   {
//     artist: "Foo Fighters",
//     song: "All My Life",
//     duration: "4:23",
//     cover_image: "Assests/tile5.jpg",
//     listens: "232 155 174",
//   },
// ]; 

/* PLAYLIST ARRAY OF OBJECTS END */

/* GENERATE PLAYLIST VARIABLES AND FUNCTION */
const playListContainer = document.getElementById("play-list-container");
let playListHtml = " ";



/* GENERATE PLAYLIST VARIABLES END */

/* PLAYER GLOBAL VARIABLES */
const playBtnContainer = document.getElementById("button-play");
const playImage = document.getElementById("play-image");
const playSong = document.getElementById("play-song");
const playBand = document.getElementById("play-band");
const playBtnIcons  = document.querySelectorAll("#button-play > i");
const durationContainer = document.getElementById("timer-end");
const timerStart = document.getElementById("timer-start");


/* PLAYER GLOBAL VARIABLES END */

/* GET VALUES TO THE PLAYER */
const getMeSong = function  (e) {
    let songId = parseInt(e.target.id.charAt(e.target.id.length - 1)); 
    playSong.innerText = playlist[songId].song;
    playImage.src = playlist[songId].cover_image;
    durationContainer.innerText = playlist[songId].duration;
}

/* GET VALUES TO THE PLAYER END */

/* JS FOR PROGRESS BAR */
let i = 0; 

const moveBar = function () {
   
   
    if (i == 0) {
        i = 1;
        let elem = document.getElementById("myBar");

        let width = 1;
        let id = setInterval(frame, 100);
            function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
            }
  }
};

const stopBar = function () {
    i = 1;

}

const btnPlay = document.getElementById("button-play");





window.onload = function () {
  loadPlayList();
  recentCardDisplay(arrayOfRandomArtists);
  toTryCardDisplay(arrayOfRandomArtists);
};

/* JS FOR PROGRESS BAR END  */



/* MOVE BAR END */