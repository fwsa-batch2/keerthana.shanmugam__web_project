let newAlbums = [];

function pageOnLoad() {
  const btsAlbum = JSON.parse(localStorage.getItem("ALBUM_DETAILS"));
  if (btsAlbum != null) {
    newAlbums = btsAlbum;
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
    "AlbumName": nameOfTheAlbum,
    "Price": price,
    "ArtistName": artist,
    "ImageLink": imageLink,
  };

  newAlbums.push(btsAlbumDetails);
  localStorage.setItem("ALBUM_DETAILS", JSON.stringify(newAlbums));

    window.location.href = "./../pages/list album.html";

}

pageOnLoad()