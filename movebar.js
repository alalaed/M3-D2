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

/* PLAYLIST ARRAY OF OBJECTS END */

/* GENERATE PLAYLIST VARIABLES AND FUNCTION */
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





window.onload = function () {
  loadPlayList();
};

/* JS FOR PROGRESS BAR END  */
