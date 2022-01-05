let newAlbum=[];

function pageOnLoad() {
    const  butteralbum = JSON.parse(localStorage.getItem("AlbumDetails"));
    if ( butteralbum != null) {
      newAlbum =  butteralbum;
    }
  }
function addSongs(event){
    event.preventDefault();

    let nameOfTheSong = document.getElementById("songName").value;
    let date = document.getElementById("releaseDate").value;
    let artist = document.getElementById("artistName").value;
    let imageLink = document.getElementById("imageLink").value

    const butterAlbumDetails = {
        "NameOfSong": nameOfTheSong,
        "Price": date,
        "ArtistName": artist,
        "imageLink": imageLink,
    };

    newAlbum.push(butterAlbumDetails);
    localStorage.setItem("AlbumDetails", JSON.stringify(newAlbum));

    window.location.href="./../pages/album list.html";

}

pageOnLoad()