






const displayAlbum = (band) => {
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${band}`)
.then(response => response.json())
.then(body => {
    console.log(body)
    let container = document.getElementById("main-section-small")          
            const inhalt = `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                        <a href="index-album.html">
                            <div class="mx-1 small-card-main d-flex align-items-center  my-2">
                                <img class="small-card-image-main"
                                    src="${body.data[0].album.cover}" alt="">
                                    <a href="index-album.html"><p class=" description-main"> ${body.data[0].title}</p></a>
                            </div>
                        </a>
            </div>
                        
                        `
    container.innerHTML +=inhalt
})

}




const responsive = function(){
     let a = document.querySelector("#main-section-small div:nth-child(8)")
     a.classList.add("hidden-sm", "hidden-md", "hidden-l") 

     let b = document.querySelector("#main-section-small div:nth-child(7)")
     b.classList.add("hidden-sm", "hidden-md", "hidden-l") 

     let c = document.querySelector("#main-section-small div:nth-child(6)")
     c.classList.add("hidden-sm", "hidden-md")

     let d = document.querySelector("#main-section-small div:nth-child(5)")
     d.classList.add("hidden-sm", "hidden-md") 
   
     let e = document.querySelector("#main-section-small div:nth-child(4)")
     e.classList.add("hidden-sm") 
   
     let f = document.querySelector("#main-section-small div:nth-child(3)")
     f.classList.add("hidden-sm") 
   
}





// const smallCardDisplay = function(){
    
//     fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=linkin%20park"
        
//     )
//     .then(response => response.json() )
//     .then( dataObj => {console.log(dataObj.data[0])
        
//     let container = document.getElementById("main-section-small")
//     let array=[] 
    

//     do {
//         let x = (Math.floor((Math.random()*11)+1))
//         if(!array.includes(x)){
//             array.push(x)
//             const inhaltmodal =`
//                 <tr>
//                     <td>${dataObj.data[x].album.title}</td>
//                 </tr>`           
//             const inhalt = `
//             <div class="col-12 col-md-6 col-lg-4 col-xl-3">
//                         <a href="index-album.html">
//                             <div class="mx-1 small-card-main d-flex align-items-center  my-2">
//                                 <img class="small-card-image-main"
//                                     src="${dataObj.data[x].album.cover_medium}" alt="">
//                                     <a href="index-album.html"><p class=" description-main"> ${dataObj.data[x].title_short}</p></a>
//                             </div>
//                         </a>
//             </div>
                        
//                         `
//     container.innerHTML +=inhalt 
//         }
//     }
//     while(array.length<8)
    
//     responsive()
    
//     })
    
//     // .catch(err => {
//     //     console.error(err);
//     // });
    
    
    

    
    
// }




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





const recentCardDisplay = function (band){
      fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${band}`)
.then(response => response.json())
.then(body => {
    console.log(body)
    let container = document.getElementById("main-section-recent")

            const inhalt = `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3 ">
        <a href="artist.html">
            <div class="card-main pb-1">
                <div class="d-flex justify-content-center">
        
                    <div class="d-flex justify-content-center">
                        <div class="imagewrapper">
                            <div class="son">
                                <img class="px-3 py-3 card-image-main" src="${body.data[0].album.cover}" alt="">
                            </div>
                            <div class="son2 d-flex justify-content-end align-items-end">
                                <div class="playbutton mb-3 mr-3">
                                    <div class="arrow-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
        
                </div>
                <h6 class="px-2 my-1 card-title">${body.data[0].title}</h6>
                <p class="card-description-main my-2 px-2 ">${body.data[0].artist.name}</p>
        
            </div>
        </a>
    </div>
                        
                        `
    container.innerHTML +=inhalt
    } )
    
    
}


const toTryCardDisplay = function(band){
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${band}`)
.then(response => response.json())
.then(body => {
    console.log(body)
    let container = document.getElementById("main-section-to-try")

            const inhalt = `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3 ">
        <a href="artist.html">
            <div class="card-main pb-1">
                <div class="d-flex justify-content-center">
        
                    <div class="d-flex justify-content-center">
                        <div class="imagewrapper">
                            <div class="son">
                                <img class="px-3 py-3 card-image-main" src="${body.data[0].album.cover}" alt="">
                            </div>
                            <div class="son2 d-flex justify-content-end align-items-end">
                                <div class="playbutton mb-3 mr-3">
                                    <div class="arrow-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
        
                </div>
                <h6 class="px-2 my-1 card-title">${body.data[0].title}</h6>
                <p class="card-description-main my-2 px-2 ">${body.data[0].artist.name}</p>
        
            </div>
        </a>
    </div>
                        
                        `
    container.innerHTML +=inhalt
    } )
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


 








const sectionToOBserve = document.getElementById("under-hero-section");
const buttonsToChange = document.getElementsByClassName(
  "artist-main-play-button"
);

const navBarToToggle = document.querySelector(".nav-wrapper-inner");
const navTextToggle = document.querySelector(".nav-text-toggling");

console.log(navBarToToggle);
console.log(buttonsToChange);

const options = {
    root: null,
    threshold: 0.8,
    rootMargin: "-150px",
 };

const observerNav = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        /* console.log(entry);
        console.log(entry.target); */
        console.log(entry.isIntersecting);
       
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

// observerNav.observe(sectionToOBserve);


/* INTERSECTION OBSERVER END */

/* MOVE BAR START */

/* HOW TO:
https://www.youtube.com/watch?v=4LBRMSk6PLY&ab_channel=PedroTech
https://www.w3schools.com/howto/howto_js_progressbar.asp
https://www.youtube.com/watch?v=QTHRWGn_sJw&ab_channel=TraversyMedia

*/

/* PLAYLIST ARRAY OF OBJECTS */

const playlist = [
  {
    artist: "Foo Fighters",
    song: "Everlong",
    duration: "4:10",
    cover_image: "Assests/tile1.jpg",
    listens: "532 068 244",
  },
  {
    artist: "Foo Fighters",
    song: "The Pretender",
    duration: "4:29",
    cover_image: "Assests/tile2.jpg",
    listens: "482 032 144",
  },
  {
    artist: "Foo Fighters",
    song: "Best of You",
    duration: "4:15",
    cover_image: "Assests/tile3.jpg",
    listens: "412 162 232",
  },
  {
    artist: "Foo Fighters",
    song: "Learn to Fly",
    duration: "3:55",
    cover_image: "Assests/tile4.jpg",
    listens: "337 051 124",
  },
  {
    artist: "Foo Fighters",
    song: "All My Life",
    duration: "4:23",
    cover_image: "Assests/tile5.jpg",
    listens: "232 155 174",
  },
]; 

//  PLAYLIST ARRAY OF OBJECTS END 

// /* GENERATE PLAYLIST VARIABLES AND FUNCTION 
const playListContainer = document.getElementById("play-list-container");
let playListHtml = " ";

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
    console.log(e.target.id);
    console.log(typeof parseInt(e.target.id.charAt(e.target.id.length - 1)));
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
        console.log(elem);
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
    console.log(i)
}

const btnPlay = document.getElementById("button-play");




const renderData = () => {
  displayAlbum("eminem")
  displayAlbum("metallica") 
  displayAlbum("behemoth")
  displayAlbum("linkin park")
  displayAlbum("drake")
  displayAlbum("50-cent")
  displayAlbum("u2")
  displayAlbum("queen")
  recentCardDisplay("eminem")
  recentCardDisplay("metallica")
  recentCardDisplay("linkin par")
  recentCardDisplay("drake")
  recentCardDisplay("u2")
  recentCardDisplay("queen")
  toTryCardDisplay("eminem")
  toTryCardDisplay("behemoth")
  toTryCardDisplay("2pac")
  toTryCardDisplay("chris brown")
  toTryCardDisplay("queen")
  toTryCardDisplay("linkin park")
}




window.onload = function(){
    renderData ()
    
    
    // loadPlayList()
     
    
 }

/* JS FOR PROGRESS BAR END  */



/* MOVE BAR END */
