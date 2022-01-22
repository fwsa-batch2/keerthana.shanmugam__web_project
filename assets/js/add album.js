let newAlbums = [];

function pageOnLoad() {
  const btsAlbum = JSON.parse(localStorage.getItem("ALBUM DETAILS"));
  if (btsAlbum != null) {
    newAlbums = btsAlbum;
  }
}
function addSongs(event) {
  event.preventDefault();

  let nameOfTheAlbum = document.getElementById("albumName").value;
  let price = document.getElementById("priceValue").value;
  let artist = document.getElementById("artistName").value;
  let imageLink = document.getElementById("imageLink").value

  const btsAlbumDetails = {
    "AlbumName": nameOfTheAlbum,
    "Price": price,
    "ArtistName": artist,
    "ImageLink": imageLink,
  };

  newAlbums.push(btsAlbumDetails);
  localStorage.setItem("ALBUM DETAILS", JSON.stringify(newAlbums));

  window.location.href = "./../pages/list album.html";

}

pageOnLoad()