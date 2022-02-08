let albums = [];

function pageOnLoad() {
  const btsAlbum = JSON.parse(localStorage.getItem("ALBUM_DETAILS"));
  if (btsAlbum != null) {
    albums = btsAlbum;
  }
}
pageOnLoad();

// it is an onsubmit function
function addAlbum(event) {
  event.preventDefault();

  //calling id from input fields from the form
  const nameOfTheAlbum = document.getElementById("albumName").value;
  const price = document.getElementById("priceValue").value;
  const artist = document.getElementById("artistName").value;
  const imageUrl = document.getElementById("imageLink").value;

  const btsAlbumDetails = {
    "album": nameOfTheAlbum,
    "price": price,
    "artist": artist,
    "imageUrl": imageUrl,
  }
  let imageUrlAlreadyExists = imageUrlValidation(imageUrl);

  if (imageUrlAlreadyExists) {
    alert("This Image Url already exists")
    return;
  }

  albums.push(btsAlbumDetails);
  localStorage.setItem("ALBUM_DETAILS", JSON.stringify(albums));

  //after submit redirect to list_album.html page

  window.location.href = "./../pages/list_album.html";

}

//checking the imageUrl is already exists
function imageUrlValidation(url) {
  console.group("imageUrlValidation")
  let thisImageUrlExists = false;

  for (let i of albums) {
    const image = i.imageUrl;

    if (url == image) {
      thisImageUrlExists = true;
      break;
    }
  }
  console.groupEnd("imageUrlValidation")
  return thisImageUrlExists;
}

