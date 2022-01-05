let butter = "";
let songDetails = JSON.parse(localStorage.getItem("AlbumDetails"));
for (let i of songDetails){
    let songNames = i.NameOfSong;
    let dates = i.Price;
    let artists = i.ArtistName;
    let imageLink = i.imageLink; 
    console.log(imageLink)
    butter +=
    `<div class="box" id="songsLists">
    <div class="albumInfo" id="albumInfo">
    <img src=\"${imageLink}\" alt="images">
    <p> Album Name : <span class="place">${songNames}</span></p><br>
    <p> Price : <span class="price">&#8377;${dates}</span></p><br>
    <p> Artists Name:<span class="guide">${artists}</span></p>
    </div>
</div>`

}

let div = document.getElementById("albumInfo");
div.innerHTML = butter;