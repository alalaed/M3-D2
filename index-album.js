const display = function () {

            let storedName = localStorage.getItem("name")
            let user = document.getElementById("username")
            const inhalt = `
         <span>${storedName}</span>
             `

            user.innerHTML += inhalt

            
        }
        

 
// function store() {

//     var name = document.getElementById('name');
//     localStorage.setItem('name', name.value);
  
// }

window.onload = function () {
            
            
            display()
        }




// fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/metallica", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
// 		"x-rapidapi-key": "f99d689b32msh4674fe11236fc2fp191515jsn9e4bf3fe0032"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });