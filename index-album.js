const display =  () => {

    let storedName = localStorage.getItem("name")
    let user = document.getElementById("username")
    const inhalt = `
        <span>${storedName}</span>
             `
     user.innerHTML += inhalt
}

const id = new URLSearchParams(window.location.search).get("albumId")

const renderAlbum = () =>{
    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/"+id)
        .then(response=>response.json())
        .then(body=>{
            let albumCover = document.querySelector(".card-head-image")
            let tracks = body.tracks.data.length
            let arr = []
            for( let i=0;i<tracks; i++) {
                let time  = body.tracks.data[i].duration   
                arr.push(time)
                const total = () => previous + current
                console.log(arr.reduce(total))
            }
            
            
            
            
            const inhalt = `
                <img class="card-image-head" src="${body.cover_big}" alt="">
            `
            albumCover.innerHTML += inhalt


            let albumTitle = document.querySelector("#header")
            const headerInhalt = `
                <p class=" description-head_1 mb-0"> ALBUM </p>
                  <h3 class=" description-head_2 mb-0">${body.title}</h3>
                  <p class=" text-muted description-head_3"> <strong>${body.artist.name}</strong> . 2018 . ${tracks} songs, 1hr 19 min
                </p>
            `
            albumTitle.innerHTML += headerInhalt
        })    
}

const renderPlaylist = () => {
    
    let container = document.querySelector(".artist-songs-table-wrapper")
        fetch("https://striveschool-api.herokuapp.com/api/deezer/album/"+id)
        .then(response=>response.json())
        .then(body=>{
            let tracks = body.tracks.data

            for(let i=0; i<tracks.length; i++){

            let time  = body.tracks.data[i].duration
                let minutes = parseInt(time/60)
                let seconds = parseInt(((time/60)-minutes) * 60)
                let duration = minutes + ":" + seconds

            const inhalt = `
                <div class="row align-items-center py-3">
                <div class="col-9 col-sm-6 artist-main-songs-list">
                    <span class="px-3 mx-0 mb-3 text-number">${i+1}</span>
                    <div class="d-inline-block"><p class="fox mb-0">${body.tracks.data[i].title}</p>
                        <p class="under_text">${body.tracks.data[i].artist.name}</p></div>
                </div>
                <div class="col-3 d-none d-md-block artist-main-songs-right">
                    <span></span>
                </div>
                <div class="col-12 col-md-3 d-none d-sm-block text-right artist-main-songs-right">
                    <span class="ml-3 duration">${duration}</span>
                </div>
                </div>
            `
            container.innerHTML += inhalt
            }
        })
}


window.onload = function () {
    display()
    renderAlbum()
    renderPlaylist()
}        