let albums = [];

function pageOnLoad() {
  const btsAlbum = JSON.parse(localStorage.getItem("ALBUM_DETAILS"));
  if (btsAlbum != null) {
    albums = btsAlbum;
  }
}

// it is an onsubmit function
function addSong(event) {
  event.preventDefault();

  const nameOfTheAlbum = document.getElementById("albumName").value;
  const price = document.getElementById("priceValue").value;
  const artist = document.getElementById("artistName").value;
  const imageLink = document.getElementById("imageLink").value;

  const btsAlbumDetails = {
    "album": nameOfTheAlbum,
    "price": price,
    "artist": artist,
    "imageUrl": imageLink,
  };

  albums.push(btsAlbumDetails);
  localStorage.setItem("ALBUM_DETAILS", JSON.stringify(albums));
   
  //after submit page redirect to list_album.html
    window.location.href = "./../pages/list_album.html";

}

pageOnLoad()