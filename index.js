

const different = [
  "drake","linkin park","metallica","queen","bruno mars","2pac","u2","rihanna","50-cent","eminem","future","biggie"
]
let arrayOfRandomArtists = []




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





const artists = (arrayOfRandomArtists) => {
  
    for( let i = 0; i<8; i++){
      let random = Math.floor( Math.random()*different.length )
      arrayOfRandomArtists.push(different[random])
    }
    return (arrayOfRandomArtists)
}
artists(arrayOfRandomArtists)



const render = (arrayOfRandomArtists) => {
  console.log(arrayOfRandomArtists)
  let container = document.getElementById("main-section-small")

  arrayOfRandomArtists.forEach(element => {
    let x = Math.floor( Math.random()*2 )
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${element}`)
    .then(response=>response.json())
    .then(body=>{
     
      const inhalt = `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          
            <div class="mx-1 small-card-main d-flex align-items-center  my-2">
                <img class="small-card-image-main" src="${body.data[x].album.cover_small}" alt="">
                <a href="./index-album.html?albumId=${body.data[x].album.id}"><p class=" description-main"> ${body.data[x].title_short}</p></a>
            </div>
          </a>
        </div>
      `
      container.innerHTML+=inhalt
      })
  })
}






const recentCardDisplay = (arrayOfRandomArtists) => {
    let container = document.getElementById("main-section-recent")  

    arrayOfRandomArtists.forEach(element => {
     let x = Math.floor( Math.random()*24 )
      fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${element}`)
      .then(response=>response.json())
      .then(body=>{
          console.log(body.data)
        const inhalt = `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 ">
          <a href="./index-album.html?albumId=${body.data[x].album.id}">
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
              <a href="./artist.html?artistId=${body.data[x].artist.id}"><p class="card-description-main my-2 px-2 ">${body.data[x].artist.name}</p></a>
            </div>
          </a>
        </div>
          `
        container.innerHTML +=inhalt 
      })
    });
}


const toTryCardDisplay = (arrayOfRandomArtists) => {
    let container = document.getElementById("main-section-to-try")

    arrayOfRandomArtists.forEach(element => {
     let x = Math.floor( Math.random()*24 )
      fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${element}`)
      .then(response=>response.json())
      .then(body=>{
          console.log(body.data)
        const inhalt = `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-3 ">
          <a href="./index-album.html?albumId=${body.data[x].album.id}">
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
              <a href="./artist.html?artistId=${body.data[x].artist.id}">
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

const display =  () => {

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

window.onload = function(){
    render(arrayOfRandomArtists)
    recentCardDisplay(arrayOfRandomArtists)
    toTryCardDisplay(arrayOfRandomArtists)
   
    
}


